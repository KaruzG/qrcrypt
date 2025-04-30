import { describe, it, expect } from 'vitest';
import { test } from '../src/index';

describe('test function', () => {
    it('should return the sum of a and b', () => {
        const params = { a: 5, b: 10 };
        const result = test(params);
        expect(result).toBe(15);
    });

    it('should handle negative numbers', () => {
        const params = { a: -5, b: -10 };
        const result = test(params);
        expect(result).toBe(-15);
    });

    it('should handle zero values', () => {
        const params = { a: 0, b: 0 };
        const result = test(params);
        expect(result).toBe(0);
    });
});