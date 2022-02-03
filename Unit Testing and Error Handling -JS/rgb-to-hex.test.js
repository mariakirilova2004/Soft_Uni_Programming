const assert = require('chai').assert
const rgbToHexColor = require('./rgb-to-hex.js');

it('ShouldReturnUndefinedForInvalidRed', () => {
    let red = -1;
    let green = 200;
    let blue = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});

it('ShouldReturnUndefinedForInvalidGreen', () => {
    let green = -1;
    let red = 200;
    let blue = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});

it('ShouldReturnUndefinedForInvalidBlue', () => {
    let blue = -1;
    let red = 200;
    let green = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});

it('ShouldReturnUndefinedForInvalidRedAbove255', () => {
    let red = 256;
    let green = 200;
    let blue = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});

it('ShouldReturnUndefinedForInvalidGreenAbove255', () => {
    let green = 256;
    let red = 200;
    let blue = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});

it('ShouldReturnUndefinedForInvalidBlueAbove255', () => {
    let blue = 256;
    let red = 200;
    let green = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});

it('ShouldReturnUndefinedForInvalidRedType', () => {
    let red = '256';
    let green = 200;
    let blue = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});

it('ShouldReturnUndefinedForInvalidGreenType', () => {
    let green = '256';
    let red = 200;
    let blue = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});

it('ShouldReturnUndefinedForInvalidBlueType', () => {
    let blue = '256';
    let red = 200;
    let green = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});

it('ShouldReturnUndefinedForInvalidBlueType', () => {
    let blue = 240;
    let red = 250;
    let green = 241;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, '#FAF1F0');
});
it('ShouldReturnUndefinedForInvalidRed', () => {
    let red = 2.3;
    let green = 200;
    let blue = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});

it('ShouldReturnUndefinedForInvalidGreen', () => {
    let green = 2.3;
    let red = 200;
    let blue = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});

it('ShouldReturnUndefinedForInvalidBlue', () => {
    let blue = 2.3;
    let red = 200;
    let green = 200;
    let rezult = rgbToHexColor(red, green, blue);
    assert.equal(rezult, undefined);
});


it('Should work correctly with one digit values in requested range of [0,9]', () => {
    let expected = '#010203'

    let actual = rgbToHexColor(1, 2, 3);

    expect(actual).to.be.equal(expected);
});

it('Should work correctly with two digits values in requested range of [10,99]', () => {
    let expected = `#${(23).toString(16)}${(55).toString(16)}${(75).toString(16)}`.toUpperCase();

    let actual = rgbToHexColor(23, 55, 75);

    expect(actual).to.be.equal(expected);
});

it('Should work correctly with three digits values in requested range of [100,255]', () => {
    let expected = `#${(233).toString(16)}${(182).toString(16)}${(190).toString(16)}`.toUpperCase();

    let actual = rgbToHexColor(233, 182, 190);

    expect(actual).to.be.equal(expected);
});

it('Should work correctly when all color values are equal to 255.', () => {
    let expected = `#${(255).toString(16)}${(255).toString(16)}${(255).toString(16)}`.toUpperCase();

    let actual = rgbToHexColor(255, 255, 255);

    expect(actual).to.be.equal(expected);
});