// Quota Balance
document.getElementById("quota-donation").addEventListener('click',function(event){
    event.preventDefault();

    // Main balance
    const mainBalance=document.getElementById("main-balance").innerText;
    var mainBalanceNumber=parseFloat(mainBalance);

    const quotaDonation=document.getElementById("quota-input").value;
    const quotaDonationNumber=parseFloat(quotaDonation);

    const quotaAmount=document.getElementById("q-amount").innerText;
    var quotaAmountNumber=parseFloat(quotaAmount);

    quotaAmountNumber+=quotaDonationNumber;
    document.getElementById("q-amount").innerText=quotaAmountNumber;
    document.getElementById("quota-input").value='';

    mainBalanceNumber+=quotaDonationNumber;
    document.getElementById("main-balance").innerText=mainBalanceNumber;
})