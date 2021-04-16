const repeatString = function(msg,num) {
    for(let i=0 ; i<num ; i++){
        if(i<0){
            return "ERROR";
        }
        else if(i === 0){
            return '';
        }
        else if(i === 1){
            return msg;
        }
        else
            return msg += msg;
    }
}

module.exports = repeatString
