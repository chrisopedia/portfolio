var Calculator = {
    buttons: $('input'),
    clear: $('input[data-type="clear"]'),
    result: $('#result'),
    equation: $('#equation'),
    firstTerm: [],

    // get the input and calculate the expression
    getDigits: function() {
        var self = this;
        this.buttons.each(function(index) {
            //console.log($(this));
            $(this).bind('click', function() {
                //console.log(self, $(this));
                self.setValue(equation, $(this).val());
                if ($(this).val() === "=") {
                    var expression = self.firstTerm.join('');
                    //console.log(expression);
                    self.setValue(result, eval(expression));
                    //console.log(eval(expression));
                } else if ($(this).val() === "clear") {
                    self.firstTerm = [];
                    equation.innerHTML = '';
                    result.innerHTML = '';
                } else {
                    self.firstTerm.push($(this).val());
                }
                //console.log($(this).val());
                //console.log(self.firstTerm);
            });
        });
    },
    // set/print out result
    setValue: function(target, value) {
        target.innerHTML += value;
    },
    
};
Calculator.getDigits();