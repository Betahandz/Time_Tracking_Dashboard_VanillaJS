// IMPORTS
import data from "./data.js";
import Activity from "./activity.js";

// CONDITIONALS
let timing = 'w';

const classActive = (btn, groupBtn) => {
    btn.addEventListener("click",  e => {
        groupBtn.forEach(btns => btns.classList.remove("active"));
        let currentBtn = e.currentTarget;
        currentBtn.classList.add("active");
        timing = e.currentTarget.dataset.id;
        Activity(data, timing);
    })
}


export default classActive;
export {timing};