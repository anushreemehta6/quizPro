// let box = document.querySelectorAll('box-1','box-2');
// let back = document.getElementsByClassName('back');
// function flip(){
//     back.style.display = "flex";
//     box.style.display ="none"
// }

// let boxes = document.querySelectorAll('.box-1, .box-2');
// let backs = document.getElementsByClassName('back');

// function flip() {
//     for (let i = 0; i < backs.length; i++) {
//         backs[i].style.display = "flex";
//     }

//     boxes.forEach(box => {
//         box.style.display = "none";
//     });
// }

document.querySelectorAll('.box-1, .box-2').forEach((front, index) => {
    let back = front.nextElementSibling;

    front.addEventListener('mouseenter', () => {
        front.style.display = 'none';
        if (back && back.classList.contains('back')) {
            back.style.display = 'flex';
        }
    });

    back.addEventListener('mouseleave', () => {
        back.style.display = 'none';
        front.style.display = 'flex';
    });
});
