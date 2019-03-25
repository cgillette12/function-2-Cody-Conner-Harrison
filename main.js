function jediName(firstName,lastName){
    let first = firstName.slice(0,1);
    let last = lastName.slice(0,3);

    let jedi = last+first;
    return jedi;
}
function beyond(num){

    if (num>0){
        return console.log("To infinity And beyond");
    }
    else if (num<0){
        console.log("To negative infinity And beyond");
    }
    else if(num===0){
        console.log("staying home");
    }
}

function decode(word){
    let outPut = '';
    let breakApart = word.split(' ');
    for(let i = 0; i < breakApart.length; i++){
      if(breakApart[i].charAt(0) === 'a'){
        outPut +=breakApart[i].charAt(1);
      }else if(breakApart[i].charAt(0) === 'b'){
        outPut +=breakApart[i].charAt(2);
      }else if(breakApart[i].charAt(0) === 'c'){
        outPut +=breakApart[i].charAt(3);
      }else if(breakApart[i].charAt(0) === 'd'){
        outPut +=breakApart[i].charAt(4);
      }else{
        outPut+= " ";
      }
    }
   console.log(outPut);

}
decode('craft block argon meter bells brown croon droop');
function a(month, leapyear){
  result='';
  switch (month){
  case "January" :{
    result= "January has 31 days";
    break;
  }
  case "Febuary" :{
    if (leapyear===true){
      result= "Febuary has 29 days";
      break;
    }
    else{
      result= "Febuary has 28 days";
      break;
    }
  }
  case "March" :{
    result= "March has 31 days";
    break;
  }
  case "April" :{
    result= "April has 30 days";
    break;
  }
  case "May" :{
    result= "May has 31 days";
    break;
  }
  case "June" :{
    result= "June has 30 days";
    break;
  }
  case "July" :{
    result= "July has 31 days";
    break;
  }
  case "August" :{
    result= "August has 31 days";
    break;
  }
  case "September" :{
    result= "September has 30 days";
    break;
  }
  case "October" :{
    result= "October has 31 days";
    break;
  }
  case "November" :{
    result= "November has 30 days";
    break;
  }
  case "December" :{
    result= "December has 31 days";
    break;
  }
  default :{
    result="Must provide a valid month.";
    break;
  }
}
return result;
}

function rockPaperScissors(num){
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if(num > 3|| num < 0){
        throw new error('error');
    }else{
        if(num === randomNo){
            return 'tie';
        }else if(num === 1 && randomNo === 2){
            return 'losser';
        }else if(num === 2 && randomNo === 3){
            return 'losser';
        }else if(num === 3 && randomNo === 1){
            return 'losser';
        }else{
            return 'winner';
        }
    }
}