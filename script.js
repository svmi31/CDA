// Gestion du splash screen
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.querySelector('main').style.display = 'block';
      }, 3000); // 3 secondes
    });

    // Quand l'utilisateur clique sur le bouton de calcul
    document.getElementById("calculate-btn").addEventListener("click", function() {
      const day = parseInt(document.getElementById("day").value);
      const month = parseInt(document.getElementById("month").value);
      const year = parseInt(document.getElementById("year").value);

      if (!day || !month || !year || day > 31 || month > 12 || year > new Date().getFullYear()) {
        alert("Veuillez entrer une date valide !");
        return;
      }

      const selectedDate = new Date(year, month - 1, day);
      const currentDate = new Date();

      let years = currentDate.getFullYear() - selectedDate.getFullYear();
      let months = currentDate.getMonth() - selectedDate.getMonth();
      let days = currentDate.getDate() - selectedDate.getDate();

      if (days < 0) {
        months -= 1;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      document.getElementById("years").textContent = years;
      document.getElementById("months").textContent = months;
      document.getElementById("days").textContent = days;
    });
