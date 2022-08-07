document.getElementById('fruit-plus').addEventListener('click', function(){
    const productInput = document.getElementById('fruit-number');
    let productNumber = productInput.value;
    // productNumber = productNumber+1;
    productNumber++;
    productInput.value=productNumber;

    // console.log(productNumber);

    document.getElementById('fruit-total').innerText=productNumber*30;
});