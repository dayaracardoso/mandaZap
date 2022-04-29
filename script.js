function mandaZap(elemento) {
    let texto = elemento.firstElementChild.innerText;
    let numero = parseInt(prompt("Qual o número? (Digite apenas números)"));
    let zapLink = `https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`;
    if(numero) {
        window.open(zapLink);
    }
}
