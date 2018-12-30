var test = 'dabAcCaCBAcCcaDA';

var AlchemicalReduction = (function() {

    var versions = {};

    return {
        go: function(input) {

            //get all versions
            for (let i=0, len=input.length; i<len; i++) {
                if (!versions[input[i].toLowerCase()]) {
                    versions[input[i].toLowerCase()] = input.slice(0);
                }
            }

            //get minimum value
            let min = Number.MAX_VALUE;

            for (let letter in versions) {
                console.log(letter);
                //reduce each version
                let regex = new RegExp(letter+'|'+letter.toUpperCase(), 'g');
                versions[letter] = versions[letter].replace(regex, '');

                //implode each version
                for (let i=0; i<versions[letter].length-1; i++) {
                    
                    if (versions[letter].charCodeAt(i) === versions[letter].charCodeAt(i+1) + 32 || versions[letter].charCodeAt(i) === versions[letter].charCodeAt(i+1) - 32) {
                        
                        versions[letter] = versions[letter].substring(0, i) + versions[letter].substring(i+2);

                        if (versions[letter].length < min) {
                            min = versions[letter].length;
                        }
                        i = -1;
                    }
                }
                
            }
            console.log(min);
            //document.getElementById('result').innerHTML += 
        }
    }

})();

AlchemicalReduction.go(input);