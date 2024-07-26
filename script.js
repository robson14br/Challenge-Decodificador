function criptografar() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    if (outputText.trim() === "") {
        document.getElementById("outputMessage").style.display = "flex";
        document.getElementById("outputText").style.display = "none";
    } else {
        document.getElementById("outputMessage").style.display = "none";
        document.getElementById("outputText").style.display = "block";
        document.getElementById("outputText").value = outputText;
    }
}

function descriptografar() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    if (outputText.trim() === "") {
        document.getElementById("outputMessage").style.display = "flex";
        document.getElementById("outputText").style.display = "none";
    } else {
        document.getElementById("outputMessage").style.display = "none";
        document.getElementById("outputText").style.display = "block";
        document.getElementById("outputText").value = outputText;
    }
}

function copiar() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
