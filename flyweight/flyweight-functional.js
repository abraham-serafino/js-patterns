// Instead of a "Factory", we use a function to retrieve shared Objects
var createCharacter = (function () {

    var characters = {};

    // this behavior is shared between the objects
    function draw (glyphContext) {
        return ' ' + glyphContext.row + glyphContext.column + ' ' + this.character;
    }

    // the returned function either creates a new object, or returns an existing shared object
    return function (c) {

       if (!characters[c]) {
           // the shared object consists of intrinsic state (the character code) and a behavior (the draw "method")
           characters[c] = { draw: draw, character: c };
       }

       return characters[c];
    };
})();

var documentRows   = [],
    output         = '';

documentRows.push([createCharacter('H'), createCharacter('e'),
                    createCharacter('l'), createCharacter('l'),
                    createCharacter('o'), createCharacter(','),
                    createCharacter(' '), createCharacter('w'),
                    createCharacter('o'), createCharacter('r'),
                    createCharacter('l'), createCharacter('d'),
                    createCharacter('!')]);

documentRows.push([createCharacter('T'), createCharacter('h'),
                   createCharacter('i'), createCharacter('s'),
                   createCharacter(' '), createCharacter('i'),
                   createCharacter('s'), createCharacter(' '),
                   createCharacter('t'), createCharacter('h'),
                   createCharacter('e'), createCharacter(' '),
                   createCharacter('f'), createCharacter('l'),
                   createCharacter('y'), createCharacter('w'),
                   createCharacter('e'), createCharacter('i'),
                   createCharacter('g'), createCharacter('h'),
                   createCharacter('t'), createCharacter(' '),
                   createCharacter('p'), createCharacter('a'),
                   createCharacter('t'), createCharacter('t'),
                   createCharacter('e'), createCharacter('r'),
                   createCharacter('n'), createCharacter('.')]);

for (var i = 0; i < documentRows.length; ++i) {
    output = '';

    for (var j = 0; j < documentRows[i].length; ++j) {
        output += documentRows[i][j].draw({ row: i, column: j });
    }

    console.log(output);
}
