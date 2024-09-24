document.getElementById("history").addEventListener('click',function(){
    document.getElementById("donation").classList.remove('bg-[#B4F461]');
    document.getElementById("history").classList.add('bg-[#B4F461]');
})

document.getElementById("donation").addEventListener('click',function(){
    document.getElementById("history").classList.remove('bg-[#B4F461]');
    document.getElementById("donation").classList.add('bg-[#B4F461]');
})
