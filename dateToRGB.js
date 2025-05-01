function ToRGB() {
    var date = document.getElementById("dateinput").value;
    date = date.split("-")
    var day = date[2]
    var month = date[1]
    var year = date[0]
    day = day/31*255
    month = month/12*255
    year = year%255
    document.getElementById("yn").style.backgroundColor = "rgb(" + day + "," + month + "," + year +")";
}