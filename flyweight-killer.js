// Completely replacing the Object-Oriented Flyweight Pattern with Services and Configuration Objects
var CharacterService = (function () {
    return {

        /**
         * draw a character at the given location
         */
        draw: function (character, location) {
            return ' ' + location.row + location.column + ' ' + character;
        },
    
        /**
         * insert a character before the given location
         */
        insertBefore: function (character, location) {
            // ...
        }
    };

})();

var messages = ['Hello, world!', 'This demonstrates the same !'],
    output   = '',
    location = {};

for (var i = 0, iLen = messages.length; i < iLen; ++i) {

    output = '';

    for (var j = 0, jLen = messages[i].length; j < jLen; ++j) {
      location = { row: i, column: j };
      output += CharacterService.draw(messages[i][j], location);
    }

    console.log(output);
}
