exports.min = function min(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }

    return array.reduce(
        (accumulator, currentValue) =>
            currentValue < accumulator ? currentValue : accumulator,
        Infinity
    );
};

exports.max = function max(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }

    return array.reduce(
        (accumulator, currentValue) =>
            currentValue > accumulator ? currentValue : accumulator,
        -Infinity
    );
};

exports.avg = function avg(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }

    return (
        array.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        ) / array.length
    );
};
