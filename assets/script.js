let quantityU = document.querySelector("#quantity-up")
console.log(quantityU)
let total = document.querySelector(".total-quantity")
console.log(total)
let quantityD = document.querySelector("#quantity-down")
console.log(quantityD)
quantityU.addEventListener('click', function(e){
    let up = parseInt(total.textContent)
    up = up + 1;
    total.textContent = up;
})
quantityD.addEventListener('click', function(e){
    let down = parseInt(total.textContent)
    down = down - 1;  
    total.textContent = down;
    if(down < 0){
        let down = parseInt(total.textContent)
        down + 1;
    }
})