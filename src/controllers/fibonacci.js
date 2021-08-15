const FibonacciController = {};

FibonacciController.getFibonacci = (request, response) => {
    let nums = request.query.nums;

    let fib = [0, 1];
    let data = [0];

    for (let i = 2; i <= nums; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        data.push(fib[i]);
    }

    if (data.length > 0) {
        response.send(data);
    } else {
        response.status(204).send(data);
    }
    response.end();
}

module.exports = FibonacciController;