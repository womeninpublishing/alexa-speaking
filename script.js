/* Alexa Bigwarfe speaker page. Vanilla JS, no dependencies. */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu after tapping a link (mobile).
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Contact form: submit to Netlify without a page reload ---------- */
  var form = document.querySelector(".form");
  var status = document.getElementById("form-status");

  function setStatus(msg, ok) {
    if (!status) return;
    status.textContent = msg;
    status.className = "form__status " + (ok ? "is-ok" : "is-err");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var button = form.querySelector('button[type="submit"]');
      var original = button ? button.textContent : "";
      if (button) {
        button.disabled = true;
        button.textContent = "Sending...";
      }
      setStatus("", true);

      var data = new URLSearchParams(new FormData(form)).toString();

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data,
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Bad response");
          form.reset();
          setStatus("Thank you. Your inquiry is in. I'll be in touch personally soon.", true);
        })
        .catch(function () {
          // Fallback for local preview (no Netlify backend) or a network hiccup.
          setStatus(
            "Something went wrong sending that. Please email info@writepublishsell.co directly.",
            false
          );
        })
        .finally(function () {
          if (button) {
            button.disabled = false;
            button.textContent = original;
          }
        });
    });
  }

  /* ---------- Current year is not needed, but keep footer honest if added later ---------- */
})();
