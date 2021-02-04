document.getElementById('first_inc').addEventListener('click', function(){
    updateForm('first_input', true);
})
document.getElementById('first_dec').addEventListener('click', function(){
    updateForm('first_input', false);
})
document.getElementById('economy_inc').addEventListener('click', function(){
    updateForm('economy_input', true);
})
document.getElementById('economy_dec').addEventListener('click', function(){
    updateForm('economy_input', false);
})
document.getElementById('book_now').addEventListener('click', function(){
    document.getElementById('book_form').style.display = "none";
    document.getElementById('total_amount').innerText = document.getElementById('total').innerText;
    document.getElementById('successful').style.display = "block"
})
function updateForm(id, isPlus){
    const formToUpdate = document.getElementById(id);    
    if(isPlus == true){
        if(formToUpdate.value == ""){
            formToUpdate.value = 1;
        }
        else{
            formToUpdate.value = parseInt(formToUpdate.value)+1;
        }
        updateSubtotal();   
        updateVat();   
        updateTotal();  
    }
    else{
        if(formToUpdate.value != "" && formToUpdate.value != 0){
            formToUpdate.value = parseInt(formToUpdate.value)-1;
        }
        updateSubtotal();
        updateVat();
        updateTotal();
    }    
}
function updateSubtotal(){
    const firstInput = parseInt(document.getElementById('first_input').value);
    const economyInput = parseInt(document.getElementById('economy_input').value);
    if(isNaN(economyInput)){
        document.getElementById('subtotal').innerText = firstInput*150;
    }
    else if(isNaN(firstInput)){
        document.getElementById('subtotal').innerText = economyInput*100;
    }
    else{
        document.getElementById('subtotal').innerText = firstInput*150 + economyInput*100;
    }        
}
function updateVat(){
    const subtotal = parseInt(document.getElementById('subtotal').innerText);
    document.getElementById('vat').innerText = subtotal * 0.1;
}
function updateTotal(){
    const subtotal = parseInt(document.getElementById('subtotal').innerText);
    const vat = parseInt(document.getElementById('vat').innerText);
    document.getElementById('total').innerText = subtotal + vat;

}