let totalPrice = 0;
function handleClick(target) {

    const selectedItemContainer = document.getElementById('slected-item');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    li.style.listStyleType = "decimal"; // Apply numbering style
    li.style.fontSize = "20px"; // Apply numbering style
    li.style.color = "#111"; // Apply numbering style
    selectedItemContainer.appendChild(li);


    const totalPricevalue = target.childNodes[3].childNodes[5].innerText.split(' ')[0];

    totalPrice = parseFloat(totalPrice) + parseFloat(totalPricevalue);
    // console.log(totalPrice);

    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    document.getElementById('total').innerText = totalPrice.toFixed(2);

    const purchaseButton = document.getElementById('purchase-button');

    if (totalPrice > 0) {
        purchaseButton.classList.add('enabled');
        purchaseButton.disabled = false;
    }
    else {
        purchaseButton.classList.remove('enabled');
        purchaseButton.classList.add('disabled');
        purchaseButton.disabled = true;
    }


    const applyButton = document.getElementById('apply-button');

    if (totalPrice >= 200) {
        applyButton.classList.add('enabled')
        applyButton.disabled = false;
    }
    else {
        applyButton.classList.remove('enabled');
        applyButton.classList.add('disabled');
        applyButton.disabled = true;
    }
}

//discount -----------------------------------------
function applyCupon() {
    const totalPrice = parseFloat(document.getElementById('total-price').innerText);
    const cuponfeild = document.getElementById('cupon-field');
    const cupon = cuponfeild.value;
    cuponfeild.value = '';

    if (cupon === 'SELL200') {
        const discount = totalPrice * 0.2;
        const finalTotal = totalPrice - discount;
        const discountAmount = discount;

        document.getElementById('discount-amount').innerText = discountAmount.toFixed(2);
        document.getElementById('total').innerText = finalTotal.toFixed(2);
    } else {
        alert("Invalid coupon code");
    }
}
function goHome(target) {

    document.getElementById('slected-item').innerHTML = '';
    document.getElementById('total-price').innerText = '00';
    document.getElementById('discount-amount').innerText = '00';
    document.getElementById('total').innerText = '00';
    document.getElementById('cupon-felid').value = '00';


}



