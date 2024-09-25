// Feni Balance
document.getElementById("feni-donation").addEventListener('click',function(event){
    event.preventDefault();

    // Main balance
    const mainBalance=document.getElementById("main-balance").innerText;
    var mainBalanceNumber=parseFloat(mainBalance);

    const feniDonation=document.getElementById("feni-input").value;
    const feniDonationNumber=parseFloat(feniDonation);

    if(isNaN(feniDonationNumber) || feniDonationNumber<0)
    {
      alert("Invalid Input");
      document.getElementById("noakhali-input").value='';
      return;
    }
    document.getElementById("alert-card").classList.remove("hidden");

    const feniAmount=document.getElementById("f-amount").innerText;
    var feniAmountNumber=parseFloat(feniAmount);

    feniAmountNumber+=feniDonationNumber;
    document.getElementById("f-amount").innerText=feniAmountNumber;
    document.getElementById("feni-input").value='';

    mainBalanceNumber+=feniDonationNumber;
    document.getElementById("main-balance").innerText=mainBalanceNumber;

    // History Input
    const today=new Date();
    const div=document.createElement('div');
    div.innerHTML=`<div class="card mx-6 lg:mx-36 shadow-2xl p-8">
        <h2 class="font-bold text-xl mt-8">
          ${feniDonationNumber} is donated for Flood Relief in Feni,Bangladesh
        </h2>
        <p class="mt-4">${today}</p>
      </div>`
    document.getElementById('history-container').appendChild(div);
})
// Close the alert when the close button is clicked
document.getElementById("close-alert-btn").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("alert-card").classList.add("hidden"); // Hide alert
});