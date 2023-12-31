const day=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
const mon=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
const date=new Date("03/15/2002");
const week=day[date.getDay(day)]
const getmonth=mon[date.getMonth(mon)]
console.log(date.getFullYear());
const sen=`${week}, ${date.getDate()} ${getmonth} ${date.getFullYear()}`

document.body.innerHTML=sen