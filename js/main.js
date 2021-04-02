// closing the popup
popup.addEventListener('click', () => {
    const popCloseBtn = document.getElementById('pop-close-btn');
    popCloseBtn.click();
})

let navList = document.querySelectorAll(".navigation__item");

// nevigation window closing and jumping to the corresponding section
navList.forEach(list => {
    list.addEventListener('click', (e) => {
        let checkbox = document.getElementById("navi-toogle");
        checkbox.click();
    })
})