import { expect } from 'chai';
import { insertionSort, trie, sum} from '../src/sort';

describe('Test insertion sort', () => {
    it('Test with sort random numbers', () => {
        const input = [3, 0, 4, 2, 6, 1];
        const result = insertionSort(input);
        expect(result).to.eql([0, 1, 2, 3, 4, 6]);
    });

    it('Test with sort nealy sorted array of numbers', () => {
        const input = [0, 1, 0, 3, 4, 6];
        const result = insertionSort(input);
        expect(result).to.eql([0, 0, 1, 3, 4, 6]);
    });

    it('Test with sort desendent array of numbers', () => {
        const input = [6, 5, 4, 3, 2, 1];
        const result = insertionSort(input);
        expect(result).to.eql([1, 2, 3, 4 ,5 ,6]);
    });

    it('Test with sort desendent array of numbers', () => {
        const input = [6, 5, 4, 3, 2, 1];
        const result = trie(input);
        expect(result).to.eql([1, 2, 3, 4 ,5 ,6]);
    });

    it('Test with sum of numbers', () => {
        const result = sum(1, 2);
        expect(result).to.eql(3);
    });
});
