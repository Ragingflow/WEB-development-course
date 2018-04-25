var matrix = [[0, 1, 1, 2],
              [0, 5, 0, 0],
              [2, 0, 3, 3]];
function sumElement(matrix) {
    var arrElements = 0;
    if (matrix.length >= 1 && matrix.length <= 5) {
        for (var i = 0; i < matrix.length; i++) {
            if (matrix[i].length >= 1 && matrix[i].length <= 5) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] >= 0 && matrix[i][j] <= 10) {
                        if (i > 0) {
                            if (matrix[i-1][j] == 0) {
                                matrix[i][j] = 0;
                            }
                        }
                        arrElements += matrix[i][j];
                    }
                    else {
                        console.log('Стоимость квартиры не соответсвует допустимой');
                    }
                }
            }
            else {
                console.log('Количество квартир не соответсвует требованиям');
            }
        }
    }
    else {
        console.log('Количество этажей не соответсвует требованиям');
    }
    return arrElements;
}
console.log(sumElement(matrix));
