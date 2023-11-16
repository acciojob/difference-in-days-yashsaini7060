var dateDiffInDays = function (date1, date2) {
  //   write your code here
	
	var date1_ms = Date.parse(date1);
	var date2_ms = Date.parse(date2);
	var difference= date2_ms-date1_ms;
	var days = difference/1000/60/60/24;
	return days;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
