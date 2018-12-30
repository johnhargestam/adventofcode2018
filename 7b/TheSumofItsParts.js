var test = [
    'Step C must be finished before step A can begin.', 'Step C must be finished before step F can begin.',
    'Step A must be finished before step B can begin.', 'Step A must be finished before step D can begin.',
    'Step B must be finished before step E can begin.', 'Step D must be finished before step E can begin.',
    'Step F must be finished before step E can begin.'
];

var TheSumofItsParts = (function() {

    function Sequence(input) {
        
    }

    return {
        go: function(input) {

            let regex = /Step (\w) must be finished before step (\w) can begin\./,
                sequence = {};

            let start = new Set(),
                connected = new Set();

            for (let row of input) {
                let data = row.match(regex);

                if (!sequence[data[1]]) {
                    sequence[data[1]] = {
                        before: new Set(),
                        after: new Set()
                    };
                }
                if (!sequence[data[2]]) {
                    sequence[data[2]] = {
                        before: new Set(),
                        after: new Set()
                    };
                }
                sequence[data[1]].after.add(data[2]);
                sequence[data[2]].before.add(data[1]);

                start.add(data[1]);
                connected.add(data[2]);
            }

            connected.forEach(function(step) {
                start.delete(step);
            });

            sequence.available = [...start];
            sequence.available.sort();

            let order = '',
                queue = [],
                time = 0,
                active = 0;

            if (sequence.available.length > 0) {

                let next = sequence.available[0];

                queue.push({
                    step: next,
                    time: next.charCodeAt(0) - 4
                });

                while (queue.length > 0) {

                    let current = queue[0].step;
                    sequence.available.splice(0, 1);

                    if (sequence.available.length > 0) {

                    }

                }

            }


            while (sequence.available.length > 0) {



                let next = sequence.available[0];
                sequence.available.splice(0, 1);

                let time = next.charCodeAt(0) - 4; //60 + (code - 64)
                console.log(time);

                for (let following of sequence[next].after) {
                    sequence[following].before.delete(next);
                    if (sequence[following].before.size === 0) {
                        sequence.available.push(following);
                    }
                }
                sequence.available.sort();
                order += next;
            }
            console.log(order);
        }
    }

})();

TheSumofItsParts.go(test);