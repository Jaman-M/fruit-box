document.getElementById('fruit1-plus').addEventListener('click', function(){
    const productInput = document.getElementById('fruit1-number');
    let productNumber = productInput.value;
    // productNumber = productNumber+1;
    productNumber++;
    productInput.value=productNumber;

    // console.log(productNumber);

    document.getElementById('fruit1-total').innerText=productNumber*20;
});