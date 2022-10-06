import {ScrollSection} from "./ScrollSection.js"

let style = document.createElement("style");
style.appendChild(document.createTextNode(".SS-Container::-webkit-scrollbar {width: 0px} .SS-Container{scrollbar-width: none;}"));
document.getElementsByTagName("head")[0].appendChild(style);

const containers = document.querySelectorAll('.SS-Container')

const listSSContainers = Array.from(containers).map(container => {
    return new ScrollSection(container);
})

function run(){
    listSSContainers.forEach(SSContainer => {
        SSContainer.on();
    });
}


run();