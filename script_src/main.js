// IMPORTS
import data from "./data.js";
import classActive from "./classActive.js";
import Activity from "./activity.js";
import { timing } from "./classActive.js";


// SELECTED ELEMENTS
const time = [...document.querySelectorAll(".time")];




// CONDITIONS AND OPTIONS



// EVENT LISTENERS
time.forEach(btn => classActive(btn, time))

window.addEventListener("DOMContentLoaded", () => {
    Activity(data, timing);
})