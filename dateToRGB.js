function ToRGB() {
    var date = document.getElementById("dateinput").value;
    date = date.split("-")
    var day = date[0]
    var month = date[1]
    var year = date[2]
    if (day >= 1 & day <= 31 & month >= 1 & month <= 12 & year >= 1900 & year <= 2025)
    {
        day = day/31*255
        month = month/12*255
        year = year%255
        document.getElementById("yn").style.backgroundColor = "rgb(" + day + "," + month + "," + year +")";
        document.getElementById("dateinput").style.backgroundColor = "white"
    }
    else {
        document.getElementById("dateinput").style.backgroundColor = "red"
    }
}