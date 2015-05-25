// Flyweight Pattern (OOP)
function GlyphContext(row, column) {
    var _this = new Object();

    // public members
    _this.row = row;
    _this.column = column;

    return _this;
}

function Character(char) {
    var _this = new Object();

    // public members
    _this.char = char;

    _this.draw = function(glyphContext) {
        return ' ' + glyphContext.row + glyphContext.column + ' ' + _this.char;
    };

    return _this;
}

function CharacterFactory() {
    var _this = new Object();

    // private members
    var characters = {};

    // public members
    _this.getCharacter = function(c) {
        if (!characters[c]) {
            characters[c] = new Character(c);
        }

        return characters[c];
    };

    return _this;
}

var documentRows = [];
var factory = new CharacterFactory();
var output = '';

documentRows.push([factory.getCharacter('H'), factory.getCharacter('e'),
                    factory.getCharacter('l'), factory.getCharacter('l'),
                    factory.getCharacter('o'), factory.getCharacter(','),
                    factory.getCharacter(' '), factory.getCharacter('w'),
                    factory.getCharacter('o'), factory.getCharacter('r'),
                    factory.getCharacter('l'), factory.getCharacter('d'),
                    factory.getCharacter('!')]);

documentRows.push([factory.getCharacter('T'), factory.getCharacter('h'),
                   factory.getCharacter('i'), factory.getCharacter('s'),
                   factory.getCharacter(' '), factory.getCharacter('i'),
                   factory.getCharacter('s'), factory.getCharacter(' '),
                   factory.getCharacter('t'), factory.getCharacter('h'),
                   factory.getCharacter('e'), factory.getCharacter(' '),
                   factory.getCharacter('f'), factory.getCharacter('l'),
                   factory.getCharacter('y'), factory.getCharacter('w'),
                   factory.getCharacter('e'), factory.getCharacter('i'),
                   factory.getCharacter('g'), factory.getCharacter('h'),
                   factory.getCharacter('t'), factory.getCharacter(' '),
                   factory.getCharacter('p'), factory.getCharacter('a'),
                   factory.getCharacter('t'), factory.getCharacter('t'),
                   factory.getCharacter('e'), factory.getCharacter('r'),
                   factory.getCharacter('n'), factory.getCharacter('.')]);

for (var i = 0; i < documentRows.length; ++i) {
    output = '';

    for (var j = 0; j < documentRows[i].length; ++j) {
        output += documentRows[i][j].draw(new GlyphContext(i, j));
    }
    console.log(output);
}
