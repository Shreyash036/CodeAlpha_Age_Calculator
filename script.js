document.getElementById("btncalculateAge").addEventListener("click", function() {
    // Get the input date value
    var dob = new Date(document.getElementById("date-input").value);
    
    // Get today's date
    var today = new Date();

    // Check if the entered date is in the future
    if (dob > today) 
    {
        alert("You cannot calculate age for a date in the future!");
        return; // Stop further execution
    }
    
    // Calculate the age
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) 
    {
        age--;
    }

    // Display the age
    document.getElementById("year").innerText = age;
    
    // Calculate months and days
    var birthMonth = dob.getMonth();
    var currentMonth = today.getMonth();
    var month = currentMonth - birthMonth;
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) 
    {
        month = 12 - Math.abs(month);
    }
    var dayDiff = today.getDate() - dob.getDate();
    if (dayDiff < 0) 
    {
        month--;
        var tempDate = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        dayDiff = tempDate.getDate() - dob.getDate() + today.getDate();
    }
    
    // Display months and days
    document.getElementById("month").innerText = month;
    document.getElementById("days").innerText = dayDiff;
});
