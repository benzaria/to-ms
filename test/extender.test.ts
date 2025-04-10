/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-console */
import '@benzn/to-ms/extender'
import ms from 'ms'
import { strictEqual } from 'assert';
import { describe, it } from 'mocha';

globalThis.iterations = 1_000_000;

describe('extender function tests', () => {
    it('should convert seconds to milliseconds', () => {
        strictEqual('1'.s, 1000);
        strictEqual('2'.s, 2000);
    });

    it('should convert minutes to milliseconds', () => {
        strictEqual('1'.m, 60000);
        strictEqual('2'.m, 120000);
    });

    it('should convert hours to milliseconds', () => {
        strictEqual('1'.h, 3600000);
        strictEqual('2'.h, 7200000);
    });

    it('should convert days to milliseconds', () => {
        strictEqual('1'.d, 86400000);
        strictEqual('2'.d, 172800000);
    });

    it('should convert weeks to milliseconds', () => {
        strictEqual('1'.w, 604800000);
        strictEqual('2'.w, 1209600000);
    });

    it('should convert months to milliseconds', () => {
        strictEqual('1'.M, 2629746000);
        strictEqual('2'.M, 5259492000);
    });

    it('should convert years to milliseconds', () => {
        strictEqual('1'.y, 31557600000);
        strictEqual('2'.y, 63115200000);
    });

    it('should handle milliseconds input', () => {
        strictEqual('100m'.s, 100);
        strictEqual('200m'.s, 200);
    });

    it("should compare performance between ms and tms: fn('1h') for '1_000_000' times", function () {
        this.timeout(5000); // Increase timeout for performance test

        const startMs = Date.now();
        for (let i = 0; i < globalThis.iterations; i++) {
            ms('1h');
        }
        const durationMs = Date.now() - startMs;

        const startTms = Date.now();
        for (let i = 0; i < globalThis.iterations; i++) {
            '1'.h
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
        for (let i = 0; i < globalThis.iterations; i++) {
            `${i}`.h;
        }
        const durationTms = Date.now() - startTms;

        console.log(`tms duration: ${durationTms}ms`);
        console.log(`ms duration: ${durationMs}ms`);

        strictEqual(durationTms < durationMs, true); // Ensure tms is faster than ms
    });

});