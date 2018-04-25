<<<<<<< HEAD
var year = prompt ('Enter a value of the year', '');

if (year.length == 1)  {
	year = "000" + year;
} else if (year.length == 2) {
	year = "00" + year;
} else if (year.length == 3) {
	year = "0" + year;
}


var hundreds = year[0] + year[1];
var decade = year[2] + year[3];

hundreds = +hundreds
decade = +decade

if (+year > 2017) {
	alert ('Год указан неправильно');
} else if (decade == 0) {
	alert (hundreds);
} else if (decade > 0) {
	alert (hundreds + 1);
=======
var year = prompt ('Enter a value of the year', '');

if (year.length == 1)  {
	year = "000" + year;
} else if (year.length == 2) {
	year = "00" + year;
} else if (year.length == 3) {
	year = "0" + year;
}


var hundreds = year[0] + year[1];
var decade = year[2] + year[3];

hundreds = +hundreds
decade = +decade

if (+year > 2017) {
	alert ('Год указан неправильно');
} else if (decade == 0) {
	alert (hundreds);
} else if (decade > 0) {
	alert (hundreds + 1);
>>>>>>> 0f48580a6713e72ed8a3454f0798d25ab6bc02db
} 