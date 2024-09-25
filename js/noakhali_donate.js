

document.getElementById("noakhali-donation").addEventListener('click',function(event){
    event.preventDefault();
    // Main balance
    const mainBalance=document.getElementById("main-balance").innerText;
    var mainBalanceNumber=parseFloat(mainBalance);

    // Noakhali Balance
    const noakhaliDonation=document.getElementById("noakhali-input").value;
    const noakhaliDonationNumber=parseFloat(noakhaliDonation);

    // if(noakhaliDonationNumber<0)
    // {
    //   alert("Invalid Input");
    //   document.getElementById("noakhali-input").value='';
    //   return;
    // }
    if(isNaN(noakhaliDonationNumber) || noakhaliDonationNumber<0)
    {
      alert("Invalid Input");
      document.getElementById("noakhali-input").value='';
      return;
    }
    document.getElementById("alert-card").classList.remove("hidden");

    const noakhaliAmount=document.getElementById("n-amount").innerText;
    var noakhaliAmountNumber=parseFloat(noakhaliAmount);

    noakhaliAmountNumber+=noakhaliDonationNumber;
    document.getElementById("n-amount").innerText=noakhaliAmountNumber;
    document.getElementById("noakhali-input").value='';

    mainBalanceNumber+=noakhaliDonationNumber;
    document.getElementById("main-balance").innerText=mainBalanceNumber;

    // History Input
    const today=new Date();
    const div=document.createElement('div');
    div.innerHTML=`<div class="card mx-6 lg:mx-36 shadow-2xl p-8">
        <h2 class="font-bold text-xl mt-8">
          ${noakhaliDonationNumber} is donated for Flood at Noakhali, Bangladesh
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