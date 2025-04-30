function ToRGB() {
    var date = document.getElementById("dateinput").value;
    date = date.split("-")
    var day = date[2]
    var month = date[1]
    var year = date[0]
    day = day*365%255
    month = month*365%255
    year = year*365%255
    document.getElementById("yn").style.backgroundColor = "rgb(" + day + "," + month + "," + year +")";
}