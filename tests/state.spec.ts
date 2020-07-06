import { expect } from 'chai';
import { areEqual, includes } from '../src/functions/state';
import { State } from '../src/utils/state';

describe('State Smoke Tests', () => {
    it('Should exist areEqual function', () => {
        expect(areEqual).to.exist;
    });
    
    it('Should return boolean when call areEqual function', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        expect(areEqual(state1, state2)).to.be.a('Boolean');
    });
    
    it('Should exist includes function', () => {
        expect(includes).to.exist;
    });

    it('Should return boolean when call includes function', () => {
        const state: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const list: State[] = [state];
        expect(includes(state, list)).to.be.a('Boolean');
    });
});

describe('Testing returns of areEqual function', () => {
    it('Should return true', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        expect(areEqual(state1, state2)).to.eql(true);
    });

    it('Should return false', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 0, 8]];
        expect(areEqual(state1, state2)).to.eql(false);
    });

    it('Should return true', () => {
        const state1: State = [[4,5,3], [2,1,6], [7, 0, 8]];
        const state2: State = [[4,5,3], [2,1,6], [7, 0, 8]];
        expect(areEqual(state1, state2)).to.eql(true);
    });

    it('Should return false', () => {
        const state1: State = [[4,5,3], [0,5,6], [2, 7, 8]];
        const state2: State = [[4,1,3], [2,1,6], [7, 7, 8]];
        expect(areEqual(state1, state2)).to.eql(false);
    });
});


describe('Testing returns of includes function', () => {
    it('Should return true', () => {
        const state: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const list: State[] = [state];
        expect(includes(state, list)).to.eql(true);
    });

    it('Should return false', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 0, 8]];
        const list: State[] = [state1];
        expect(includes(state2, list)).to.eql(false);
    });

    it('Should return true', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 0, 8]];
        const list: State[] = [];
        list.push(state1);
        list.push(state2);
        expect(includes(state2, list)).to.eql(true);
    });

    it('Should return false', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 0, 8]];
        const state3: State = [[1,2,5], [3,4,6], [7, 0, 8]];
        const list: State[] = [];
        list.push(state1);
        list.push(state2);
        expect(includes(state3, list)).to.eql(false);
    });

    it('Should return false', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const list: State[] = [];
        expect(includes(state1, list)).to.eql(false);
    });

    it('Should return true', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state1Copy: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const list: State[] = [];
        list.push(state1);
        expect(includes(state1Copy, list)).to.eql(true);
    });
});