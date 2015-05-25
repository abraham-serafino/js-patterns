/* The flyweight pattern was created to solve a problem that only exists in Object-Oriented paradigms.
 *
 * Our "functional" flyweight pattern is a step in the right direction - but it's still an
 * object-oriented solution because the "flyweight" objects we're creating are still objects. Since
 * Javascript isn't innately object-oriented, there is no special requirement to bundle functions 
 * with the data they operate on - instead we can hand each function a rich "configuration object".
 *
 * If you ask yourself which Sacrement of Good Design this violates, you will doubtless remember that all code
 * should be "modular" - but this is already being accomplished in Java's Spring Framework and J2EE, without 
 * the need for data-and-method-bundles (more commonly referred to as classes). J2EE and Spring accomplish the same
 * modularity by using "stateless services," (which are really just a glorified collection of related functions). 
 * These services operate on "model objects" (which are really just glorified named arrays) that need to be passed
 * in at run-time.
 *
 * The Javascript equivalent of a "stateless service" is a "module", and a "data model" is what Javascript calls
 * a Configuration Object.
 */ 

// The CharacterService module can be used by any framework that supports CommonJS
var CharacterService = function () {
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
};

(function(CharacterService) {

    var messages = [
                    'Hello, world!',
                    'This demonstrates how to solve the same problem without any Object-Oriented thinking!'
                ],

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

})((CharacterService)());
