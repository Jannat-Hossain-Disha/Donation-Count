

document.getElementById("noakhali-donation").addEventListener('click',function(event){
    event.preventDefault();
    // Main balance
    const mainBalance=document.getElementById("main-balance").innerText;
    var mainBalanceNumber=parseFloat(mainBalance);

    // Noakhali Balance
    const noakhaliDonation=document.getElementById("noakhali-input").value;
    const noakhaliDonationNumber=parseFloat(noakhaliDonation);

    const noakhaliAmount=document.getElementById("n-amount").innerText;
    var noakhaliAmountNumber=parseFloat(noakhaliAmount);

    noakhaliAmountNumber+=noakhaliDonationNumber;
    document.getElementById("n-amount").innerText=noakhaliAmountNumber;
    document.getElementById("noakhali-input").value='';

    mainBalanceNumber+=noakhaliDonationNumber;
    document.getElementById("main-balance").innerText=mainBalanceNumber;
})
