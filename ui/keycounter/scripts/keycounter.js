var KeyCounter = function( input ) {
    // if the  input is either blank return out
    if ( input === '' ) return;
    var linesOfText = input.split( '\n' ),
        values = {};
    // if the lines of text are inline, don't execute
    if ( linesOfText.length > 1 ) {
        // loop through the array
        for ( var line in linesOfText ) {
            // split each line by the comma
            var currentLine = linesOfText[line].split( ',' ),
                // set the key = the first item in the array
                key = currentLine[0],
                // set the value = the second item in the array,
                // parse as an integar
                value = parseInt( currentLine[1] );
            // if the key exist in the object
            if ( values[key] ) {
                // add the value to the object key
                values[key] += value;
            } else {
                // set the value to the object key
                values[key] = value;
            }
        }
    }
    // return the object
    return values;
},
    settings,
    Output = {
        elements : {
            container : document.getElementById( 'key-count' ),
            button : document.getElementById( 'key-count-check' ),
            input : document.getElementById( 'key-count-input' ),
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
                if ( KeyCounter( settings.input.value ) === undefined ) return;

                Output.showResult( 'msg', KeyCounter( settings.input.value ) );
            }, false);
        },

        showResult : function( target, value ) {
            var el = document.getElementById( target );

            for ( var item in value ) {
                settings.text += 'The total for ' + item + ' is ' + value[item] + '. ';
            }
            var textNode = document.createTextNode( settings.text );
            if ( el !== null ) {
                el.firstChild.nodeValue = settings.text;
            } else {
                settings.frag.appendChild( textNode );
                document.getElementsByTagName( 'body' )[0].insertBefore( settings.frag );
            }
        }

    };
Output.init();
