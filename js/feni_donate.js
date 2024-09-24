// Feni Balance
document.getElementById("feni-donation").addEventListener('click',function(event){
    event.preventDefault();

    // Main balance
    const mainBalance=document.getElementById("main-balance").innerText;
    var mainBalanceNumber=parseFloat(mainBalance);

    const feniDonation=document.getElementById("feni-input").value;
    const feniDonationNumber=parseFloat(feniDonation);

    const feniAmount=document.getElementById("f-amount").innerText;
    var feniAmountNumber=parseFloat(feniAmount);

    feniAmountNumber+=feniDonationNumber;
    document.getElementById("f-amount").innerText=feniAmountNumber;
    document.getElementById("feni-input").value='';

    mainBalanceNumber+=feniDonationNumber;
    document.getElementById("main-balance").innerText=mainBalanceNumber;
})