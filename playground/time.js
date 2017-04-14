var moment = require('moment');

var createdAt = 1234;
var date = moment(createdAt);
//date.add(2,'year').subtract(12,'months')
console.log(date.format('h:mm a'));

// var date = new Date();
// console.log(date.getMonth());
