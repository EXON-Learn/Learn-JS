const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";


function init() {
    title.addEventListener("click", handleClick);
}

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);

}

init(); 