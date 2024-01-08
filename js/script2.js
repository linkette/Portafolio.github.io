!(function () {
  const e = document.querySelector("#theme-toggle"),
    t = e.querySelector("button"),
    n = e.querySelector("#theme-toggle-label");
  e.addEventListener("submit", (e) => {
    e.preventDefault(),
      (async () => {
        var e = await (
            await fetch("/theme-toggle?" + new URLSearchParams({ client: !0 }))
          ).json(),
          e =
            ((document.documentElement.dataset.theme = e.theme),
            "Set theme to " + e.nextTheme);
        (n.innerHTML = e), (t.title = e);
      })();
  });
})();
