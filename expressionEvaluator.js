let input = process.argv[2]

function expressionEvaluator(input){
  if (typeof input === "string"){ //converts input to array if it's a string
    input = input.split(' ')
  }
  if(input[0] !== '+' && input[0] !== '-'){  //returns integer if no operator is found
    return parseInt(input);
  }
  let computedValue;
  if (input[input.length-3] === '-'){
    computedValue = parseInt(input[input.length-2]) - parseInt(input[input.length-1])
  } else if (input[input.length-3] === '+'){
    computedValue = parseInt(input[input.length-2]) + parseInt(input[input.length-1])
  }
  if(input.length > 3){
    input = input.slice(0, input.length-3)
    input.push(computedValue)
    return expressionEvaluator(input) //recursive call
  } else {
    return computedValue
  }
}

console.log(expressionEvaluator(input))
