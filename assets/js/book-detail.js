var amountElement = document.querySelector('#amount');
var btnMinus = document.querySelector('button.btn-minus');
var btnPlus = document.querySelector('button.btn-plus');

var amount = amountElement.value;

btnMinus.onclick = function() {
    if(amount > 1) {
        amount--;
    }
    amountElement.value = amount;
}

btnPlus.onclick = function() {
    amount++;
    amountElement.value = amount;
}

