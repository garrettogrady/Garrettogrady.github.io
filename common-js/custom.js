
/**
 *
 *
 * Modals
 */

//beaconator
var beacon_modal = document.getElementById('beaconatorModal');
var beacon_btn = document.getElementById("beaconatorOpen");
var beacon_span = document.getElementsByClassName("beaconatorClose")[0];
beacon_btn.onclick = function() {
    beacon_modal.style.display = "block";
}

beacon_span.onclick = function() {
    beacon_modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == beacon_modal) {
        beacon_modal.style.display = "none";
    }
}

//ios
var ios_modal = document.getElementById('iosModal');
var ios_btn = document.getElementById("iosOpen");
var ios_span = document.getElementsByClassName("iosClose")[0];
ios_btn.onclick = function() {
    ios_modal.style.display = "block";
}

ios_span.onclick = function() {
    ios_modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == ios_modal) {
        ios_modal.style.display = "none";
    }
}

//mission
var mission_modal = document.getElementById('missionModal');
var mission_btn = document.getElementById("missionOpen");
var mission_span = document.getElementsByClassName("missionClose")[0];
mission_btn.onclick = function() {
    mission_modal.style.display = "block";
}

mission_span.onclick = function() {
    mission_modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == mission_modal) {
        mission_modal.style.display = "none";
    }
}

//mission
var posner_modal = document.getElementById('posnerModal');
var posner_btn = document.getElementById("posnerOpen");
var posner_span = document.getElementsByClassName("posnerClose")[0];
posner_btn.onclick = function() {
    posner_modal.style.display = "block";
}

posner_span.onclick = function() {
    posner_modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == posner_modal) {
        posner_modal.style.display = "none";
    }
}
