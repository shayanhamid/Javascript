function cToF(celsius)
  {
    var ctemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + '/xBOC is ' + cToFahr + '/xBOF.';
      console.log(message);
    
  }
​
function fToC (farenheit)
{
  var ftemp = farenheit;
  var fToCel = (ftemp - 32) * 5/9;
  var message = fTemp +'/xBOF is '+ fToCel + '/xBOC.';
    console.log(message);