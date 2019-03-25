function jediName(firstName,lastName){
    let first = firstName.slice(0,1);
    let last = lastName.slice(0,3);

    let jedi = last+first
    return jedi;
}