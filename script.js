// Função para abrir o menu no mobile
document.querySelector(".menu-toggle").addEventListener("click", function () {
    const navMenu = document.querySelector(".nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active"); // Alterna a classe active para o ícone de hambúrguer
});

// Função para fechar o menu ao clicar no ícone de fechar
document.querySelector(".close-menu").addEventListener("click", function () {
    const navMenu = document.querySelector(".nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active"); // Remove a classe active do ícone de hambúrguer
});

// Função para redirecionar ao WhatsApp ao enviar o formulário
document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os valores dos campos do formulário
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Cria a URL para o WhatsApp com os dados do formulário
    const whatsappNumber = "5581933009246"; // Substitua pelo seu número do WhatsApp com código do país e DDD
    const whatsappMessage = `Olá! Meu nome é ${encodeURIComponent(name)}. Meu email é ${encodeURIComponent(email)}. Mensagem: ${encodeURIComponent(message)}.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Redireciona para o WhatsApp
    window.open(whatsappURL, "_blank");
});

// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('.nav-menu li a');

// Adiciona um evento de clique a cada link
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove a classe 'active' de todos os links
        menuLinks.forEach(item => item.classList.remove('active'));
        // Adiciona a classe 'active' ao link clicado
        this.classList.add('active');

        // Fecha o menu no mobile após o clique
        const navMenu = document.querySelector(".nav-menu");
        const menuToggle = document.querySelector(".menu-toggle");
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active"); // Remove a classe active do ícone de hambúrguer
    });
});
