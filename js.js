let spinning;

function generatePhoneNumber() {
    const Uzbraqam = "+998";
    const shu = [33, 90, 91, 93, 94, 95, 97, 99]; 
    const uzunligi = shu[Math.floor(Math.random() * shu.length)];  
    const nomer = Math.floor(1000000 + Math.random() * 9000000); 
    return Uzbraqam + uzunligi + nomer; 
}

function spin() {
    spinning = setInterval(function() {
        document.getElementById('result').innerText = generatePhoneNumber();
    }, 100);
    setTimeout(function() {
        clearInterval(spinning);  
        spinning = null; 
    }, 4000); 
}

document.getElementById('spinbtn').addEventListener('click', spin);
