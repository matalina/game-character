import character from '../src/js/character';

describe('character object', () => {
    test('chracter object/function exists', () => {
        expect(character()).toBeTruthy;
    });
});
