    // عرض/إخفاء كلمة المرور
    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");
    togglePassword.addEventListener("click", () => {
      const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
      passwordField.setAttribute("type", type);
      togglePassword.classList.toggle("fa-eye");
      togglePassword.classList.toggle("fa-eye-slash");
    });