function jediName(firstName,lastName){
    let first = firstName.slice(0,1);
    let last = lastName.slice(0,3);

    let jedi = last+first
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