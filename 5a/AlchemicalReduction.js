var test = 'dabAcCaCBAcCcaDA';

var AlchemicalReduction = (function() {

    return {
        go: function(input) {

            console.log(test);

            for (let i=0; i<input.length-1; i++) {
                if (input.charCodeAt(i) === input.charCodeAt(i+1) + 32 || input.charCodeAt(i) === input.charCodeAt(i+1) - 32) {
                    input = input.substring(0, i) + input.substring(i+2);
                    i = -1;
                }
            }
            console.log(input.length);
            //document.getElementById('result').innerHTML += 
        }
    }

})();

AlchemicalReduction.go(input);