/* eslint-disable no-console */
import tms from '../dist/index.js';
import ms from 'ms'
import { strictEqual, throws } from 'assert';
import { describe, it } from 'mocha';

globalThis.iterations = 1_000_000;

describe('tms function tests', () => {
    it('should convert seconds to milliseconds', () => {
        strictEqual(tms('1s'), 1000);
        strictEqual(tms('2s'), 2000);
    });

    it('should convert minutes to milliseconds', () => {
        strictEqual(tms('1m'), 60000);
        strictEqual(tms('2m'), 120000);
    });

    it('should convert hours to milliseconds', () => {
        strictEqual(tms('1h'), 3600000);
        strictEqual(tms('2h'), 7200000);
    });

    it('should convert days to milliseconds', () => {
        strictEqual(tms('1d'), 86400000);
        strictEqual(tms('2d'), 172800000);
    });

    it('should convert weeks to milliseconds', () => {
        strictEqual(tms('1w'), 604800000);
        strictEqual(tms('2w'), 1209600000);
    });

    it('should convert months to milliseconds', () => {
        strictEqual(tms('1M'), 2629746000);
        strictEqual(tms('2M'), 5259492000);
    });

    it('should convert years to milliseconds', () => {
        strictEqual(tms('1y'), 31557600000);
        strictEqual(tms('2y'), 63115200000);
    });

    it('should handle milliseconds input', () => {
        strictEqual(tms('100ms'), 100);
        strictEqual(tms('200ms'), 200);
    });

    it('should handle plain number input', () => {
        strictEqual(tms(1000), 1000);
        strictEqual(tms(2000), 2000);
    });

    it('should throw an error for invalid format', () => {
        throws(() => tms('1x'), /Invalid time format/);
        throws(() => tms('abc'), /Invalid time format/);
    });

    it('should throw a TypeError for non-string and non-number input', () => {
        throws(() => tms({}), /Input must be a string or number/);
        throws(() => tms([]), /Input must be a string or number/);
    });

    it("should compare performance between ms and tms: fn('1h') for '1_000_000' times", function () {
        this.timeout(5000); // Increase timeout for performance test

        const startMs = Date.now();
        for (let i = 0; i < globalThis.iterations; i++) {
            ms('1h');
        }
        const durationMs = Date.now() - startMs;

        const startTms = Date.now();
        for (let i = 0; i < 600_000; i++) {
            tms('1h');
        }
        const durationTms = Date.now() - startTms;

        console.log(`tms duration: ${durationTms}ms`);
        console.log(`ms duration: ${durationMs}ms`);

        strictEqual(durationTms < durationMs, true); // Ensure tms is faster than ms
    });

    it("should compare performance between ms and tms: fn(`${i}h`) for '1_000_000' times", function () {
        this.timeout(5000); // Increase timeout for performance test

        const startMs = Date.now();
        for (let i = 0; i < globalThis.iterations; i++) {
            ms(`${i}h`);
        }
        const durationMs = Date.now() - startMs;

        const startTms = Date.now();
        for (let i = 0; i < 600_000; i++) {
            tms(`${i}h`);
        }
        const durationTms = Date.now() - startTms;

        console.log(`tms duration: ${durationTms}ms`);
        console.log(`ms duration: ${durationMs}ms`);

        strictEqual(durationTms < durationMs, true); // Ensure tms is faster than ms
    });

});