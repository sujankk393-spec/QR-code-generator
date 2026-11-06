const urlInput = document.getElementById("urlInput");
const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qrContainer");

generateBtn.onclick = function () {

    const url = urlInput.value.trim();

    if (url === "") {
        alert("Please enter a URL");
        return;
    }

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: url,
        width: 200,
        height: 200
    });

};
