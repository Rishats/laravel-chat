// Login button with Socialite.

// Кнопки входа
function loginEvent() {
    document.getElementById("loginFacebook").onclick = function () {
        location.href = "/login/facebook";
    };
    document.getElementById("loginGithub").onclick = function () {
        location.href = "/login/github";
    };
    document.getElementById("loginGoogle").onclick = function () {
        location.href = "/login/google";
    };
    document.getElementById("loginLinkedin").onclick = function () {
        location.href = "/login/linkedin";
    };
    document.getElementById("loginTwitter").onclick = function () {
        location.href = "/login/twitter";
    };
}

loginEvent();