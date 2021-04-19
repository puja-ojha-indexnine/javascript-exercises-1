const sumAll = function(start,end) {
    let sum=0;
    if(!Number.isInteger(start) || !Number.isInteger(end))
        return "ERROR";
    else if(start < 0 || end < 0)
        return "ERROR";
    else if(start > end){
        while(end <= start){
            sum += end;
            end++;
        }
        return sum;
    }
    else{
        for(let i=start ; i<=end ; i++){
            sum += i;
        }
        return sum;
    }

}

module.exports = sumAll
