import {getFormattedValue} from "../utils";

test('formats the long value', () => {
    expect(getFormattedValue('123456')).toBe('123,456')
})