var akanArray = [
    {
        "Sunday": "Kwasi",
        "Monday": "Kwadwo",
        "Tuesday": "Kwabena",
        "Wednesday": "Kwaku",
        "Thurday": "Yaw",
        "Friday": "Kofi",
        "Saturday": "Kwame"
    },
    {
        "Sunday": "Akosua",
        "Monday": "Adwoa",
        "Tuesday": "Abenaa",
        "Wednesday": "Akua",
        "Thurday": "Yaa",
        "Friday": "Afua",
        "Saturday": "Ama"
    }
]
var weekDayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
var colorIndex = 0;
function changeBackgroundColor() {
    var doc = document.getElementsByTagName("BODY")[0];
    var color = ["#49599a", "#883997", "#0069c0", "#75a478", "#00867d", "#087f23"];
    doc.style.backgroundColor = color[colorIndex];
    colorIndex = (colorIndex + 1) % color.length;
}
setInterval(changeBackgroundColor, 2000);
function validateForm() {
    var gender = document.getElementsByName("gender");
    var mdate = document.getElementById("mdate");
    var mmonth = document.getElementById("mmonth");
    var myear = document.getElementById("myear");
    var formValid = false;
    var i = 0;
    document.getElementById("result").innerHTML = "";
    if (mdate.value == "" || mdate.value == null) {
        document.getElementById("result").innerHTML += "Day is Required";
        document.getElementById("result").style.color = 'red';
        mdate.style.border = "2px solid red";
        return false;
    } else {
        mdate.style.border = "";
        if (!isNaN(mdate.value)) {
            if (mdate.value <= 0 || mdate.value > 31) {
                document.getElementById("result").innerHTML += "Invalid Day";
                document.getElementById("result").style.color = 'red';
                mdate.style.border = "2px solid red";
                return false;
            }
        } 