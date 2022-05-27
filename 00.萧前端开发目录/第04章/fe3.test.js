
var testSum = function() {
    var numbers = [1, 2, 3, 4]
    var value = 10
    ensure(value == sum(numbers), 'sum 错误')
    ensure(1 == sum([1]), 'sum  1 错误')
}


var testProduct = function() {
    ensure(product([1, 2, 3]) === 6, 'test product 1')
    ensure(product([1, 2, 0]) === 0, 'test product 2')
}


var testAbs = function() {
    ensure(abs(0) === 0, 'abs 0 错误')
    ensure(abs(-6) === 6, 'abs -6 错误')
    ensure(abs(5) === 5, 'abs 5 错误')
}


var __main = function() {
    testSum()
    testAbs()
    testMin()
}

__main()

console.log('fe3 test 结束')
