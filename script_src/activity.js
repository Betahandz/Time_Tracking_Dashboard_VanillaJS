// SELECTED ELEMENTS
const rightBoard = document.querySelector(".right");

// FUNCTIONS
function Activity(data, timing) {
    let dataMap = data;
    dataMap = dataMap.map(items => {
        const {title, timeframe : {daily, weekly, monthly}, icon} = items;
        return `<div class="activity round">
            ${icon}
            <div class="info round">
                <header class="head">
                    <p class="title reg small bright">${title}</p>
                    <svg class="ellipsis" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                </header>
                <div class="info-detail">
                    <p class="hours light big"><span class="number">${timing === 'w' ? weekly.current : timing === 'd' ? daily.current : monthly.current}</span>hrs</p>
                    <p class="previous reg medium">${timing === 'd' ? "" : "Last"} <span class="cal">${timing === 'w' ? "week" : timing === 'd' ? "yesterday" : "month"}</span> - <span class="digit">${timing === 'w' ? weekly.previous : timing === 'd' ? daily.previous : monthly.previous}</span>hrs</p>
                </div>
            </div>
        </div>`
    })
    rightBoard.innerHTML = dataMap.join("");
}


export default Activity;