
      const rugBtn = document.getElementById("rugFilterBtn");
      const rugMenu = document.getElementById("rugMenu");
      const filterButtons = document.querySelectorAll(".rug-menu-item");
      const sections = document.querySelectorAll(".rug-section");

      // Open / close dropdown
      document.addEventListener("click", function (e) {
        if (rugBtn.contains(e.target)) {
          rugMenu.classList.toggle("open");
        } else if (!rugMenu.contains(e.target)) {
          rugMenu.classList.remove("open");
        }
      });

      // Filter sections
      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const filter = btn.getAttribute("data-filter");

          filterButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          sections.forEach((sec) => {
            const cat = sec.getAttribute("data-category");
            if (filter === "all" || filter === cat) {
              sec.classList.remove("hidden");
            } else {
              sec.classList.add("hidden");
            }
          });
        });
      });

      // Default active = all
      const defaultBtn = document.querySelector(
        '.rug-menu-item[data-filter="all"]'
      );
      if (defaultBtn) defaultBtn.classList.add("active");
    