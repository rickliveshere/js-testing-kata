var Timer = require('../../src/Timer');
var chai = require('chai'),
            expect = chai.expect,
            should = chai.should();

describe('Timer', function(){
    describe('Update', function(){
        it('Should add 1 second to the previous second', function() {
            var timer = new Timer({seconds: 23});
            expect(timer.time.seconds).to.equal(23);
            expect(timer.time.minutes).to.equal(0);
            expect(timer.time.hours).to.equal(0);

            timer.update();

            expect(timer.time.seconds).to.equal(24);
            expect(timer.time.minutes).to.equal(0);
            expect(timer.time.hours).to.equal(0);
        });
    });
});

describe('Timer', function(){
    describe('Update', function(){
        it('Should increase minutes by one when seconds at 59', function() {
            var timer = new Timer({seconds: 59});
            expect(timer.time.seconds).to.equal(59);
            expect(timer.time.minutes).to.equal(0);
            expect(timer.time.hours).to.equal(0);

            timer.update();

            expect(timer.time.seconds).to.equal(0);
            expect(timer.time.minutes).to.equal(1);
            expect(timer.time.hours).to.equal(0);
        });
    });
});

describe('Timer', function(){
    describe('Update', function(){
        it('Should increase hours by one when minutes at 59 and seconds at 59', function() {
            var timer = new Timer({seconds: 59, minutes: 59});
            expect(timer.time.seconds).to.equal(59);
            expect(timer.time.minutes).to.equal(59);
            expect(timer.time.hours).to.equal(0);

            timer.update();

            expect(timer.time.seconds).to.equal(0);
            expect(timer.time.minutes).to.equal(0);
            expect(timer.time.hours).to.equal(1);
        });
    });
});

describe('Timer', function(){
    describe('Update', function(){
        it('Should remove 1 second from the previous second', function() {
            var timer = new Timer({seconds: 23}, true);
            expect(timer.time.seconds).to.equal(23);
            expect(timer.time.minutes).to.equal(0);
            expect(timer.time.hours).to.equal(0);

            timer.update();

            expect(timer.time.seconds).to.equal(22);
            expect(timer.time.minutes).to.equal(0);
            expect(timer.time.hours).to.equal(0);
        });
    });
});

describe('Timer', function(){
    describe('Update', function(){
        it('Should decrease minutes by one when seconds at 0', function() {
            var timer = new Timer({seconds: 0, minutes: 45}, true);
            expect(timer.time.seconds).to.equal(0);
            expect(timer.time.minutes).to.equal(45);
            expect(timer.time.hours).to.equal(0);

            timer.update();

            expect(timer.time.seconds).to.equal(59);
            expect(timer.time.minutes).to.equal(44);
            expect(timer.time.hours).to.equal(0);
        });
    });
});

describe('Timer', function(){
    describe('Update', function(){
        it('Should decrease hours by one when minutes at 0 and seconds at 0', function() {
            var timer = new Timer({seconds: 0, minutes: 0, hours: 1}, true);
            expect(timer.time.seconds).to.equal(0);
            expect(timer.time.minutes).to.equal(0);
            expect(timer.time.hours).to.equal(1);

            timer.update();

            expect(timer.time.seconds).to.equal(59);
            expect(timer.time.minutes).to.equal(59);
            expect(timer.time.hours).to.equal(0);
        });
    });
});

describe('Timer', function(){
    describe('Update', function(){
        it('Should not decrease time into negative values', function() {
            var timer = new Timer({seconds: 0, minutes: 0, hours: 0}, true);
            expect(timer.time.seconds).to.equal(0);
            expect(timer.time.minutes).to.equal(0);
            expect(timer.time.hours).to.equal(0);

            timer.update();

            expect(timer.time.seconds).to.equal(0);
            expect(timer.time.minutes).to.equal(0);
            expect(timer.time.hours).to.equal(0);
        });
    });
});