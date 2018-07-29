const SECONDS_IN_MINUTE = 60,
      MINUTES_IN_HOUR = 60;

const Timer = class Timer {

    constructor(time, reverse) {
        let defaultTime = { seconds:0, minutes: 0, hours: 0 };

        if (time === Object(time)) {
            Object.keys(time).map(function(key, index) {
                if (defaultTime.hasOwnProperty(key)) {
                    defaultTime[key] = time[key];
                }
            });
        }

        this.time = defaultTime;
        this.reverse = reverse;
    }

    update() {
        if (this.canUpdate()) {
            if (this.reverse) {
                this.time.seconds--;
            }
            else {
                this.time.seconds++;
            }
        
            this.adjust('seconds', 'minutes', SECONDS_IN_MINUTE, 0);
            this.adjust('minutes', 'hours', MINUTES_IN_HOUR, 0);
        }
    }

    canUpdate() {
        var { seconds, minutes, hours } = this.time;
        return seconds + minutes + hours > 0;
    }

    adjust(measurementType, relatedMeasurementType, upperBoundary, lowerBoundary) {   
        var measurement = this.time[measurementType];

        if (measurement === upperBoundary)
        {
            this.time[measurementType] = 0;
            this.time[relatedMeasurementType]++;
        }
        else if (measurement < lowerBoundary)
        {
            this.time[measurementType] = 59;
            this.time[relatedMeasurementType]--;
        }
    }
}

module.exports = Timer;