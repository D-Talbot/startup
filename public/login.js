function login() {
    const nameEl = document.getElementById("username");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
  }  

  function createAccount() {
    const nameEl = document.getElementById("username");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
  }  