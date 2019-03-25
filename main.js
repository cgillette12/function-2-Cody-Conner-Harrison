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