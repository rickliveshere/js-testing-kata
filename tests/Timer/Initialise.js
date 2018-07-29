var Timer = require('../../src/Timer');
var chai = require('chai'),
            expect = chai.expect,
            should = chai.should();

describe('Timer', function(){
    describe('Initialise', function(){
        it('Should be initialised with 1 second', function() {
            var timer = new Timer({seconds: 1});
            expect(timer.time.seconds).to.equal(1);
            expect(timer.time.minutes).to.equal(0);
            expect(timer.time.hours).to.equal(0);
        });
    });
});

describe('Timer', function(){
    describe('Initialise', function(){
        it('Should be initialised with 1 minute', function() {
            var timer = new Timer({minutes: 1});
            expect(timer.time.seconds).to.equal(0);
            expect(timer.time.minutes).to.equal(1);
            expect(timer.time.hours).to.equal(0);
        });
    });
});

describe('Timer', function(){
    describe('Initialise', function(){
        it('Should be initialised with 1 hour', function() {
            var timer = new Timer({hours: 1});
            expect(timer.time.seconds).to.equal(0);
            expect(timer.time.minutes).to.equal(0);
            expect(timer.time.hours).to.equal(1);
        });
    });
});