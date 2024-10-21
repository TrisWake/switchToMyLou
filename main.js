/******************************/
//Your Code Here 
const dayOfWeek
switch(dayOfWeek){
  case 1: {
    console.log("Monday")
    break
  }
  case 2: {
    console.log("Tuesday")
    break
  }
  case 3: {
    console.log("Wednesday")
    break
  }
  case 4: {
    console.log("Thursday")
    break
  }
  case 5: {
  console.log("Friday")
  break
  }
  case 6: {
    console.log("Saturday")
    break
  }
  case 7: {
    console.log("Sunday")
    break
  }
}



/****************************/
// Our code here. Don't touch!
if (typeof dayOfWeek === 'undefined') {
    dayOfWeek = undefined
  }
  
  if (typeof identifySeason === 'undefined') {
    identifySeason = undefined
  }
  
  if (typeof menuSelection === 'undefined') {
    menuSelection = undefined
  }

  
  
  module.exports = {
    dayOfWeek, 
    identifySeason, 
    menuSelection
  }
  