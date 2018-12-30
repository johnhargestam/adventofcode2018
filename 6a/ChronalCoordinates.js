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
                y: +data[2],
                area: 0,
                infinite: false
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

    function findAreas(grid, points) {

        for (let x = grid.x0; x < grid.x1+1; x++) {
            for (let y = grid.y0; y < grid.y1+1; y++) {

                let minDistance = Number.MAX_VALUE,
                    minId = null;

                for (let id in points) {

                    let distance = Math.abs(points[id].x - x) + Math.abs(points[id].y - y);

                    if (distance < minDistance) {
                        minDistance = distance;
                        minId = id;
                    } else if (distance === minDistance) {
                        minId = null;
                    }
                }
                if (minId !== null) {
                    if (x === grid.x0 || x === grid.x1 || y === grid.y0 || y === grid.y1) {
                        points[minId].infinite = true;
                    }
                    points[minId].area++;
                }
            }
        }
    }

    return {
        go: function(input) {

            var points = createPoints(input),
                grid = createGrid(points);

            findAreas(grid, points);

            let maxNonInfinteArea = 0;
            for (let id in points) {

                if (!points[id].infinite && points[id].area > maxNonInfinteArea) {
                    maxNonInfinteArea = points[id].area;
                }
            }
            console.log(points, grid);
            console.log(maxNonInfinteArea);
        }
    }

})();

ChronalCoordinates.go(input);