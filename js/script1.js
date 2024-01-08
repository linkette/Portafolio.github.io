!(function () {
  const t = document.querySelector("[data-guestbook]");
  if (t) {
    const e = t.querySelector("form"),
      o = t.querySelector("details"),
      r = t.querySelector("p"),
      a = (e) => {
        e.preventDefault();
        (e = event.target), (e = new FormData(e));
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(e).toString(),
        })
          .then(() => {
            r.classList.add("font-bold"),
              (r.innerText = "Thank you for your submission! 🎉"),
              (t.role = "status"),
              (t.ariaLive = "polite"),
              o.remove();
          })
          .catch((e) => alert(e));
      };
    e.addEventListener("submit", a);
  }
})();
