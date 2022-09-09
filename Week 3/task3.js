//Get the current time using the below method
const now = new Date(Date.now());
console.log('current time is ');
console.log( now.toDateString());

//giving Date and tme and printing it
const birthday = new Date('December 17, 1995 03:24:00');
console.log(birthday);
const birthday1 = new Date('1995-12-17T03:24:0');
console.log(birthday1);

//We can also get date, month , day and year
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());

//we can set specific date and time using below method
now.setFullYear(2025);
console.log(now.getFullYear());

now.setDate(10);
console.log(now.getDate());

//elapsed time between two times but the out put is in mileseconds
let newDate = new Date();
setTimeout(() => {
    newDate = Date.now();
    console.log(newDate - now);
}, 1000);