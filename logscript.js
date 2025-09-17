
    document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const registerLink = document.querySelector("#registerLink");
    const loginLink = document.querySelector("#loginLink");

    registerLink.addEventListener("click", function (e) {
        e.preventDefault();
        wrapper.classList.add("active");
    });

    loginLink.addEventListener("click", function (e) {
        e.preventDefault();
        wrapper.classList.remove("active");
    });

    document.querySelector("#registerForm").addEventListener("submit", async function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                wrapper.classList.remove("active");
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });

    document.querySelector("#loginForm").addEventListener("submit", async function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                window.location.href = "/main";
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
});
