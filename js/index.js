// 第一步实现基础的加减乘除运算
// 
let add = function (a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return ('参数有误，请确认!');
  }
  return a + b;
}

let subtract = function (a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return ('参数有误，请确认!');
  }
  return a - b;
}

let multiply = function (a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return ('参数有误，请确认!');
  }
  return a * b;
}

let divide = function (a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b)) || b == 0) {
    return ('参数有误，请确认!');
  }
  return a / b;
}

let operate = function (operator, oprandA, operandB) {
  return operator(oprandA, operandB);
}

console.log(operate(add, 1, 2));
