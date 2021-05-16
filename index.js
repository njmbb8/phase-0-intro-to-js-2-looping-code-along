function writeCards(names, event) {
    let ret = [];
    for(let i = 0; i < names.length; i++){
        ret[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return ret;
}

function countDown(num) {
    while(num>=0){
        console.log(num);
        num--;
    }
}