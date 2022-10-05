import {ScrollSection} from "./ScrollSection.js"

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