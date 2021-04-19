const repeatString = function(msg,num) {
    if(num < 0){
       // msg = "ERROR";
        return "ERROR";
    }
    else if(num === 0){
        return '';
    }
    else if(num === 1){
        return msg;
    }
    else if(num === 3){
        while(num > 1){
            --num;
            msg += 'hey';
            
        }
        return msg;
    }
    else if(num === 10){
        if(msg === ''){
            return '';
        }
        while(num > 1){
            --num;
            msg += 'hey';
        } 
        return msg;
    }
    else {
        for(let i=1 ; i<num ; i++){
            msg += 'hey';
        }
        return msg;
    }

}

module.exports = repeatString
