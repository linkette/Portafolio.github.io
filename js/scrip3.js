!(function () {
  const e = document.querySelector("[data-tabs]"),
    a = e.querySelector("ul"),
    i = (e.querySelectorAll("span"), [...e.querySelectorAll("[href]")]),
    l = document.querySelectorAll("[data-tab-panel]"),
    s =
      (e.removeAttribute("role"),
      a.setAttribute("role", "tablist"),
      (e, t) => {
        t.focus(),
          t.removeAttribute("tabindex"),
          (t.dataset.tabActive = !0),
          t
            .querySelector("span")
            .classList.add("border-b-brand-stroke", "text-text-1"),
          t.setAttribute("aria-selected", "true"),
          e.removeAttribute("aria-selected"),
          e.setAttribute("tabindex", "-1"),
          e
            .querySelector("span")
            .classList.remove("border-b-brand-stroke", "text-text-1"),
          (e.dataset.tabActive = !1);
        (t = i.indexOf(t)), (e = i.indexOf(e));
        (l[e].className = "hidden"), (l[t].className = "block");
      });
  i.forEach((e, r) => {
    var t = "true" === e.dataset.tabActive;
    e.setAttribute("role", "tab"),
      e.setAttribute("id", "tab" + (r + 1)),
      t || e.setAttribute("tabindex", "-1"),
      t && e.setAttribute("aria-selected", !0),
      e.parentNode.setAttribute("role", "presentation"),
      (e.href = "#" + e.getAttribute("href").slice(1)),
      e.addEventListener("click", (e) => {
        e.preventDefault();
        var t = a.querySelector("[aria-selected]");
        e.currentTarget !== t && s(t, e.currentTarget);
      }),
      e.addEventListener("keydown", (e) => {
        var t = i.indexOf(e.currentTarget),
          t =
            37 === e.which
              ? t - 1
              : 39 === e.which
              ? t + 1
              : 40 === e.which
              ? "down"
              : null;
        null !== t &&
          (e.preventDefault(),
          "down" === t ? l[r].focus() : i[t] && s(e.currentTarget, i[t]));
      });
  }),
    l.forEach((e, t) => {
      e.setAttribute("role", "tabpanel"),
        e.setAttribute("tabindex", "-1"),
        e.getAttribute("id"),
        e.setAttribute("aria-labelledby", i[t].id);
    });
})();
