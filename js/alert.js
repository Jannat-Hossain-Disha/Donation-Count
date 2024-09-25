
document.getElementById("noakhali-donation").addEventListener("click", function(event) {
    event.preventDefault();
    // Noakhali Balance
    const noakhaliDonation=document.getElementById("noakhali-input").value;
    const noakhaliDonationNumber=parseFloat(noakhaliDonation);

    if(noakhaliDonationNumber<0)
    {
      alert("Invalid Input");
      return;
    }
    else if(noakhaliDonationNumber>=0)
        document.getElementById("alert-card").classList.remove("hidden"); // Show alert

});
document.getElementById("feni-donation").addEventListener("click", function(event) {
    event.preventDefault();
    // Feni Balance
    const feniDonation=document.getElementById("feni-input").value;
    const feniDonationNumber=parseFloat(feniDonation);
    if(feniDonationNumber<0)
        {
          alert("Invalid Input");
        }
        else if(noakhaliDonationNumber>=0)
            document.getElementById("alert-card").classList.remove("hidden"); // Show alert

});
document.getElementById("quota-donation").addEventListener("click", function(event) {
    event.preventDefault();
    // quota Balance
    const quotaDonation=document.getElementById("quota-input").value;
    const quotaDonationNumber=parseFloat(quotaDonation);
    if(quotaDonationNumber<0)
        {
          alert("Invalid Input");
        }
        else if(noakhaliDonationNumber>=0)
            document.getElementById("alert-card").classList.remove("hidden"); // Show alert

});
// Close the alert when the close button is clicked
document.getElementById("close-alert-btn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("alert-card").classList.add("hidden"); // Hide alert
});