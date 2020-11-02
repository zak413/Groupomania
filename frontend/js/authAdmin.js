function verifRole() {
    if (localStorage.getItem("role") === "basic") {
      window.location = "../html/pageAccueil.html";
    }
  }
  
  verifRole();