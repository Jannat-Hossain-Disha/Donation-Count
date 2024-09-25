// Quota Balance
document.getElementById("quota-donation").addEventListener('click',function(event){
    event.preventDefault();

    // Main balance
    const mainBalance=document.getElementById("main-balance").innerText;
    var mainBalanceNumber=parseFloat(mainBalance);

    const quotaDonation=document.getElementById("quota-input").value;
    const quotaDonationNumber=parseFloat(quotaDonation);

    if(quotaDonationNumber<0)
      {
        alert("Invalid Input");
        return;
      }
      else if(quotaDonationNumber>=0)
          document.getElementById("alert-card").classList.remove("hidden"); // Show alert

    const quotaAmount=document.getElementById("q-amount").innerText;
    var quotaAmountNumber=parseFloat(quotaAmount);

    quotaAmountNumber+=quotaDonationNumber;
    document.getElementById("q-amount").innerText=quotaAmountNumber;
    document.getElementById("quota-input").value='';

    mainBalanceNumber+=quotaDonationNumber;
    document.getElementById("main-balance").innerText=mainBalanceNumber;

    // History Input
    const today=new Date();
    const div=document.createElement('div');
    div.innerHTML=`<div class="card mx-6 lg:mx-36 shadow-2xl p-8">
        <h2 class="font-bold text-xl mt-8">
          ${quotaDonationNumber} is donated to Aid for Injured in the Quota Movement,Bangladesh
        </h2>
        <p class="mt-4">${today}</p>
      </div>`
    console.log(div);
    document.getElementById('history-container').appendChild(div);
})

// Close the alert when the close button is clicked
document.getElementById("close-alert-btn").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("alert-card").classList.add("hidden"); // Hide alert
});