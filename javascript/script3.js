let num1 = 50
let num2 = 10
let operator = "substraction"
let result = 0
switch (operator){
    case "addition":
        result = num1  + num2
        break
    case "substraction":
        result = num1-num2
        break
    default:
            result += "invalid nnumber"
}
 console.log(result);