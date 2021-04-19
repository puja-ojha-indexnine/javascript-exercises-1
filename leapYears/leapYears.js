const leapYears = function(year) {

    if((year % 100 != 0) || (year % 400 == 0)){
        if(year % 4 === 0)
            return true;
        else
            return false;
    }
    else
    return false;
}

module.exports = leapYears
