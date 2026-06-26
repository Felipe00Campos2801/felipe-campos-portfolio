document.addEventListener("DOMContentLoaded", () => {

    // --- 1. VALIDAÇÃO DO FORMULÁRIO ---
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        formMessage.className = "hidden";

        if (name === "") {
            printTerminalFeedback("Erro: O preenchimento do campo Nome Completo é obrigatório.", "error-msg");
            return;
        }

        if (!emailRegex.test(email)) {
            printTerminalFeedback("Erro: Por favor, insira um endereço de e-mail válido.", "error-msg");
            return;
        }

        if (message === "") {
            printTerminalFeedback("Erro: O preenchimento do campo Mensagem é obrigatório.", "error-msg");
            return;
        }

        printTerminalFeedback("👉 Mensagem enviada com sucesso!", "success-msg");
        form.reset();
    });

    function printTerminalFeedback(text, className) {
        formMessage.textContent = text;
        formMessage.className = className;
    }


    // --- 2. CONTROLE DO TEMA VISUAL ---
    const themeToggle = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    themeToggle.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        htmlElement.setAttribute("data-theme", newTheme);
        themeToggle.textContent = newTheme === "dark" ? "Modo Escuro" : "Modo Claro";
    });
});
