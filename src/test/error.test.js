import { it, expect, describe } from 'vitest';
import isValidInput from './error.js';


describe('input validation', () => {
    it('should return true if input has value and not empty', () => {
        const inputvalue = "kalle"

        const result = isValidInput(inputvalue);

        expect(result).toBe(true)
    })
    it('should return false  if input is empty', () => {
        const inputvalue = '';

        const result = isValidInput(inputvalue);

        expect(result).toBe(false)
    })
})