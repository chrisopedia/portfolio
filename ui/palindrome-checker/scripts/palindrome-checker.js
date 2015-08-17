var Palindrome = ( function() {
    // set up an array of all punctuation to check against
    // will need to strip out these to ensure the string matches
    var punc = [',', ' ', ';', ':', '\'', '?', '!'],

        // private method that accepts 1 parameter, the string
        stringCheck = function( string ) {
            var temp = '',
                i = 0,
                len = string.length;
            // set up a loop on the string
            for ( ; i < len; i++ ) {
                // check to see if any punctuation is in the string
                if ( punc.indexOf( string.charAt( i ) ) === -1 ) {
                    // add only the characters that aren't in the
                    // punctuation array to the temp string
                    temp += string.charAt( i );
                }
            }
            // return the temp string, but lower case it
            return temp.toLowerCase();
        },
        // private method that accepts 1 parameter, the string
        stringReverse = function( string ) {
            var temp = '',
                i = string.length;
            // set up a loop, but count down this time
            for ( ; i >= 0; i-- ) {
                // check to see if any punctuation is in the string
                if ( punc.indexOf( string.charAt( i ) ) === -1 ) {
                    // add only the characters that aren't in the
                    // punctuation array to the temp string
                    temp += string.charAt( i );
                }
            }
            // return the temp string, but lower case it
            return temp.toLowerCase();
        };

    return function( string ) { 
        // check to make sure its a string, if not
        // return out
        if ( typeof string !== 'string' || string === '' ) return;

        // return true if the both strings are equal to each other
        return stringCheck( string ) === stringReverse( string );
    };
}());
var settings,
    Output = {
        elements : {
            container : document.getElementById( 'palindrome' ),
            button : document.getElementById( 'palindrome-check' ),
            input : document.getElementById( 'palindrome-input' ),
            frag : document.createElement( 'div' ),
            text : ''
        },

        init : function() {
            settings = this.elements;
            settings.frag.setAttribute( 'id', 'msg' );
            this.bindUIActions();
        },

        bindUIActions : function() {
            settings.button.addEventListener( 'click', function(e) {
                settings.text = settings.input.value;
                var checkPalindrome = Palindrome( settings.text ),
                    errorMsg = '';

                if ( checkPalindrome === undefined ) return;

                Palindrome( settings.text );
                if ( checkPalindrome ) {
                    settings.text += ' is a palindrome.';
                    errorMsg = 'success';
                } else {
                    settings.text += ' is not a palindrome.';
                    errorMsg = 'error';
                }
                Output.showResult( 'msg', settings.text, errorMsg );
            }, false);
        },

        showResult : function( target, value, err ) {
            var el = document.getElementById( target ),
                textNode = document.createTextNode( settings.text );

            settings.container.className = 'Form ' + err;
            if ( el !== null ) {
                el.firstChild.nodeValue = settings.text;
                el.setAttribute( 'class', err );
            } else {
                settings.frag.appendChild( textNode );
                document.getElementsByTagName( 'body' )[0].insertBefore( textNode, settings.frag );
                settings.frag.setAttribute( 'class', err );
            }
        }

    };
Output.init();
