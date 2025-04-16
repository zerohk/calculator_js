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


// 获取显示区域
const display = document.querySelector(".display");
let displayValue = '';

// 获取所有数字按钮
const numberButtons = document.querySelectorAll(".number");

// 为每个数字按钮绑定点击事件
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    // 获取按钮上的数字（直接取文本内容）
    let input = button.textContent;
    // 如果第一位输入0，则不添加
    if (!(input == 0 && displayValue.length == 0)) {
      displayValue += input;
    }

    // 更新显示区域
    if (displayValue.length > 0) {
      display.textContent = displayValue;
    }
  });
});

// 添加清除按钮逻辑
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  // 清空显示区域
  display.textContent = 0;
  // 清空输入值变量
  displayValue = '';
})