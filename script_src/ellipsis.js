function ellipsis() {
    const ellipsis = document.querySelectorAll(".ellipsis");
    for(let i = 0; i < ellipsis.length; i++) {
        ellipsis[i].addEventListener("mouseover", e => {
            let currentParentElem = e.currentTarget.parentNode.parentNode;
            currentParentElem.classList.add("activeInfo");
        })

        ellipsis[i].addEventListener("mouseleave", e => {
            let currentParentElem = e.currentTarget.parentNode.parentNode;
            currentParentElem.classList.remove("activeInfo");
        })
    }
}


export default ellipsis;