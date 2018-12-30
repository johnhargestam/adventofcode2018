var test = ['1, 1', '1, 6', '8, 3', '3, 4', '5, 5', '8, 9'];

var ChronalCoordinates = (function() {

    function createPoints(input) {
        let regex = /(\d+),\s(\d+)/,
            points = {},
            id = 0;

        for (let row of input) {
            let data = row.match(regex);

            points[++id] = {
                x: +data[1],
                y: +data[2]
            };
        }
        return points;
    }

    function createGrid(points) {

        let xMin = Number.MAX_VALUE,
            yMin = Number.MAX_VALUE,
            xMax = Number.MIN_VALUE,
            yMax = Number.MIN_VALUE;

        for (let id in points) {
            if (points[id].x < xMin) {
                xMin = points[id].x;
            }
            if (points[id].y < yMin) {
                yMin = points[id].y;
            }
            if (points[id].x > xMax) {
                xMax = points[id].x;
            }
            if (points[id].y > yMax) {
                yMax = points[id].y;
            }
        }
        return {
            x0: xMin - 1,
            y0: yMin - 1,
            x1: xMax + 1,
            y1: yMax + 1
        };
    }

    function findAreaSize(grid, points) {

        let areaSize = 0;

        for (let x = grid.x0; x < grid.x1+1; x++) {
            for (let y = grid.y0; y < grid.y1+1; y++) {

                let distanceToAll = 0;

                for (let id in points) {
                    distanceToAll += Math.abs(points[id].x - x) + Math.abs(points[id].y - y);
                }

                if (distanceToAll < 10000) {
                    areaSize++;
                }
            }
        }
        return areaSize;
    }

    return {
        go: function(input) {

            var points = createPoints(input),
                grid = createGrid(points);

            let regionAreaSize = findAreaSize(grid, points);

            
            console.log(points, grid);
            console.log(regionAreaSize);
        }
    }

})();

ChronalCoordinates.go(input);