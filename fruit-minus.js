document.getElementById('fruit-minus').addEventListener('click', function(){
    const productInput = document.getElementById('fruit-number');
    let productNumber = productInput.value;
    // productNumber = productNumber+1;
    if(productNumber>0)productNumber--;
    productInput.value=productNumber;

    // console.log(productNumber);

    if(productNumber>0){
        document.getElementById('fruit-total').innerText=productNumber*30;
    }
    else{
        alert("Add some fruits")
    }
});