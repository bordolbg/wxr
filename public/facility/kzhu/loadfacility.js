window.onload = function() {

var vis = 5
var cei = 499
var windDirection = 005
var windSpeed = 5
var windDirectionText;

function windDirectionText(wind){
    if(wind < 10) {
        windDirectionText = "00" + wind
    } else if(wind < 100) {
        windDirectionText = "0" + wind
    } else {
        windDirectionText = wind
    }
    return windDirectionText
}
var wind = windDirectionText(windDirection) + " / " + windSpeed
/* Insert Code to Pull Visibility, Ceiling/Wind Layers(if wind layers, create logic to find ceiling),
Wind, and Altimeter for specific airport. Set Visibility and Ceiling to vis and cei */
    
// IAH Flight Rules
if(vis < 1 || cei < 500) {
    document.getElementById("iah-rules").innerHTML = "LIFR";
    } else if(vis <= 3 || cei <= 1000) {
        document.getElementById("iah-rules").innerHTML = "IFR";
    } else if(vis <= 5 || cei <= 3000) {
        document.getElementById("iah-rules").innerHTML = "MVFR";
    } else if(vis > 5 || cei > 3000) {
        document.getElementById("iah-rules").innerHTML = "VFR";
    } else {
        document.getElementById("iah-rules").innerHTML = "Unknown";
    }

document.getElementById("iah-wind").innerHTML = wind

// Insert code to pull data for HOU

// HOU Flight Rules
if(vis < 1 || cei < 500) {
    document.getElementById("hou-rules").innerHTML = "LIFR";
    } else if(vis <= 3 || cei <= 1000) {
        document.getElementById("hou-rules").innerHTML = "IFR";
    } else if(vis <= 5 || cei <= 3000) {
        document.getElementById("hou-rules").innerHTML = "MVFR";
    } else if(vis > 5 || cei > 3000) {
        document.getElementById("hou-rules").innerHTML = "VFR";
    } else {
        document.getElementById("hou-rules").innerHTML = "Unknown";
    }

//Insert code to pull data for MSY

// MSY Flight Rules
if(vis < 1 || cei < 500) {
    document.getElementById("msy-rules").innerHTML = "LIFR";
    } else if(vis <= 3 || cei <= 1000) {
        document.getElementById("msy-rules").innerHTML = "IFR";
    } else if(vis <= 5 || cei <= 3000) {
        document.getElementById("msy-rules").innerHTML = "MVFR";
    } else if(vis > 5 || cei > 3000) {
        document.getElementById("msy-rules").innerHTML = "VFR";
    } else {
        document.getElementById("msy-rules").innerHTML = "Unknown";
    }

// Insert code to pull data for AUS

// AUS Flight Rules
if(vis < 1 || cei < 500) {
    document.getElementById("aus-rules").innerHTML = "LIFR";
    } else if(vis <= 3 || cei <= 1000) {
        document.getElementById("aus-rules").innerHTML = "IFR";
    } else if(vis <= 5 || cei <= 3000) {
        document.getElementById("aus-rules").innerHTML = "MVFR";
    } else if(vis > 5 || cei > 3000) {
        document.getElementById("aus-rules").innerHTML = "VFR";
    } else {
        document.getElementById("aus-rules").innerHTML = "Unknown";
    }

// Insert code to pull data for SAT

// SAT Flight Rules
if(vis < 1 || cei < 500) {
    document.getElementById("sat-rules").innerHTML = "LIFR";
    } else if(vis <= 3 || cei <= 1000) {
        document.getElementById("sat-rules").innerHTML = "IFR";
    } else if(vis <= 5 || cei <= 3000) {
        document.getElementById("sat-rules").innerHTML = "MVFR";
    } else if(vis > 5 || cei > 3000) {
        document.getElementById("sat-rules").innerHTML = "VFR";
    } else {
        document.getElementById("sat-rules").innerHTML = "Unknown";
    }
}