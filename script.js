let input = document.querySelectorAll('.main__input')
let btn = document.querySelector('.main__link2')

let name  = 'Shohruh'
let password = 20060107

btn.addEventListener('click', () => {
    if (input[0].value == name && input[1].value == password) {
         alert("Salom");
    }else{
        alert("Xato");
    }
})
