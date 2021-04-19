const ftoc = function(fer) {
  return Math.round((fer-32)*(5/9)*10)/10;
}

const ctof = function(cel) {
  return Math.round(((cel*9/5)+32)*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
