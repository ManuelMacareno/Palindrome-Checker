function verificarPalindromo() {

    let textoOriginal = document.getElementById("text-input").value;
    let texto = textoOriginal.replace(/[\s_]/g, '');
    let textoRevertido = texto.split('').reverse().join('');

    if (texto === textoRevertido) {
        document.getElementById("result").innerHTML = textoOriginal + ' is a palindrome.';
    } else {
        document.getElementById("result").innerHTML = textoOriginal + ' is NOT a palindrome.';
    }

    if (texto.length === 0) {
        alert("Please input a value")
    }
}