function donationNum(id){
    const donation=document.getElementById(id).value;
    const donationNumber=parseFloat(donation);
    return donationNumber;
}