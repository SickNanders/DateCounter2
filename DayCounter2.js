//Creating a function to call when button is clicked
function buttonAction() {
    //Gets number of days from user
    var userMonth = prompt("Enter the starting month (1-12)");
    var userDate = prompt("Enter the starting date (1-31)");
    var userYear = prompt("Enter the starting year (YYYY)");
    var startDate = new Date(userYear, userMonth, userDate);
    var daysFromToday = prompt("Enter number of days");
    var updateMsg;
    var elOutput;


    //creating a function to calculate number of days from current date
    function dayCounter(startDate) {
        //Declare all varibales use in calculation
        var timeFromToday, day, date, month, year, namesOfMonths, namesOfDays;
        //Calculates time (in ms) from current date
        timeFromToday = new Date(startDate.getTime() + daysFromToday * 24 * 60 * 60 * 1000);
        //Create array to store names of the days of the week
        namesOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //create an array to store the names of the months of the year
        namesOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        day = namesOfDays[timeFromToday.getDay()];
        date = timeFromToday.getDate();
        month = namesOfMonths[timeFromToday.getMonth()];
        year = timeFromToday.getFullYear();

        updateMsg = daysFromToday + ' days from ' + namesOfMonths[userMonth-1] + ' ' + userDate +', ' + userYear + ' will be ';
        updateMsg += '<br />' + day + ', ' + month + ' ' + date + ', ' + year;
        return updateMsg;
    }

    elOutput = document.getElementById('output');
    elOutput.innerHTML = dayCounter(startDate);


};
