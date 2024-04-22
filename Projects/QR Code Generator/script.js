const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" ;
const val = document.getElementById("input") ;
let qrIMG = document.getElementById("qrIMG") ;
const container = document.getElementById("container") ;
let btnText = document.getElementById("button") ;
function generateQR ()
{
    if (val.value === "")
    {
        // alert("You need to add some text or link fist : ") ;
        document.getElementById("qrIMG").style.display = "none" ;
        container.classList.add("error") ;
        btnText.innerHTML = "Error" ;
        setTimeout(() => {
            container.classList.remove("error") ;
            setTimeout(() => {
                btnText.innerHTML = "Generate QR Code" ;
            }, 0);
        }, 500);
        return ;
    }
    qrIMG.src = api + val.value ;
    document.getElementById("qrIMG").style.display = "block" ;
}

// btnText.innerHTML = "Generate QR Code" ;
