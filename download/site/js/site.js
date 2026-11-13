/* MTG Commander website: menu, picture sliders, the big picture on click, fade-ins, and the patch notes
   (read from /download/PATCH_NOTES.md and put in as text only, never as HTML). */
(function () {
  "use strict";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var NOTES_URL = "/download/PATCH_NOTES.md";

  // ---------------- the menu: this page lit, the phone menu button
  var path = location.pathname.replace(/index\.html$/, "");
  document.querySelectorAll(".bar nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path || (href !== "/" && path.indexOf(href) === 0)) a.classList.add("on");
  });
  var menuBtn = document.querySelector(".menu-btn"), nav = document.querySelector(".bar nav");
  if (menuBtn && nav) menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // ---------------- the big picture on click (any .shot, slide or gallery picture)
  var box = document.createElement("div");
  box.className = "lightbox"; box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "Picture"); box.tabIndex = -1;
  var big = document.createElement("img"); big.alt = "";
  box.appendChild(big); document.body.appendChild(box);
  function openBig(src, alt) { big.src = src; big.alt = alt || ""; box.classList.add("on"); box.focus(); }
  box.addEventListener("click", function () { box.classList.remove("on"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") box.classList.remove("on"); });
  document.querySelectorAll("img.shot, .gallery img").forEach(function (img) {
    img.addEventListener("click", function () { openBig(img.src, img.alt); });
  });

  // ---------------- picture sliders: <div class="slider" data-slider> with <figure class="slide"> inside
  document.querySelectorAll("[data-slider]").forEach(function (slider) {
    var slides = slider.querySelector(".slides");
    var figs = Array.prototype.slice.call(slides.children);
    var thumbs = document.createElement("div"); thumbs.className = "thumbs"; thumbs.setAttribute("aria-label", "Pictures");
    slider.parentNode.insertBefore(thumbs, slider.nextSibling);
    var at = 0, timer = null;
    figs.forEach(function (fig, i) {
      var img = fig.querySelector("img");
      fig.addEventListener("click", function () { openBig(img.src, img.alt); });
      var t = document.createElement("button");
      t.setAttribute("aria-label", (fig.querySelector("b") || {}).textContent || ("Picture " + (i + 1)));
      var ti = document.createElement("img"); ti.alt = ""; ti.loading = "lazy";
      ti.src = img.getAttribute("src").replace(/\.jpg$/, "-thumb.jpg");
      t.appendChild(ti);
      t.addEventListener("click", function () { go(i); restart(); });
      thumbs.appendChild(t);
    });
    function go(i) {
      at = (i + figs.length) % figs.length;
      slides.style.transform = "translateX(" + (-100 * at) + "%)";
      Array.prototype.forEach.call(thumbs.children, function (t, k) { t.classList.toggle("on", k === at); });
      var on = thumbs.children[at];
      if (on) thumbs.scrollTo({ left: on.offsetLeft - thumbs.clientWidth / 2 + on.clientWidth / 2, behavior: reduced ? "auto" : "smooth" });
    }
    function restart() {
      if (timer) clearInterval(timer);
      if (!reduced) timer = setInterval(function () { go(at + 1); }, 6000);
    }
    slider.querySelector(".prev").addEventListener("click", function () { go(at - 1); restart(); });
    slider.querySelector(".next").addEventListener("click", function () { go(at + 1); restart(); });
    slider.addEventListener("mouseenter", function () { if (timer) clearInterval(timer); });
    slider.addEventListener("mouseleave", restart);
    var x0 = null;   // swipe on phones
    slider.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) { go(at + (dx < 0 ? 1 : -1)); restart(); }
    });
    document.addEventListener("keydown", function (e) {
      if (box.classList.contains("on")) return;
      var r = slider.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        if (e.key === "ArrowLeft") { go(at - 1); restart(); }
        if (e.key === "ArrowRight") { go(at + 1); restart(); }
      }
    });
    go(0); restart();
  });

  // ---------------- sections fade in as they come into view
  if ("IntersectionObserver" in window && !reduced && location.hash !== "#static") {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("seen"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("seen"); });
  }

  // ---------------- patch notes: #notes-preview (the two newest), #notes-full with #notes-toc (all of them)
  var preview = document.getElementById("notes-preview"), full = document.getElementById("notes-full"), toc = document.getElementById("notes-toc");
  var versionSpots = document.querySelectorAll("[data-version]");
  if (!preview && !full && !versionSpots.length) return;

  function inline(parent, text) {   // **bold** only; everything else stays text
    text.split(/(\*\*[^*]+\*\*)/).forEach(function (part) {
      if (/^\*\*[^*]+\*\*$/.test(part)) { var b = document.createElement("b"); b.textContent = part.slice(2, -2); parent.appendChild(b); }
      else if (part) parent.appendChild(document.createTextNode(part));
    });
  }
  function parse(md) {
    var versions = [], cur = null, part = null;
    md.split(/\r?\n/).forEach(function (line) {
      var m;
      if ((m = /^## (.+)$/.exec(line))) { cur = { title: m[1].trim(), parts: [] }; versions.push(cur); part = null; }
      else if (cur && (m = /^### (.+)$/.exec(line))) { part = { head: m[1].trim(), items: [] }; cur.parts.push(part); }
      else if (cur && (m = /^- (.+)$/.exec(line))) {
        if (!part) { part = { head: "", items: [] }; cur.parts.push(part); }
        part.items.push(m[1]);
      }
    });
    return versions.filter(function (v) { return !/not live yet/i.test(v.title); });
  }
  function slug(v) { return "v-" + v.title.split("·")[0].replace(/[^0-9]/g, ""); }
  function card(v, latest, cut) {
    var el = document.createElement("article");
    el.className = "note" + (latest ? " latest" : "");
    el.id = slug(v);
    var bits = v.title.split("·");
    var h = document.createElement("h3"); h.textContent = bits[0].trim();
    var when = document.createElement("p"); when.className = "when";
    when.textContent = (latest ? "Latest · " : "") + (bits[1] ? bits[1].trim() : "");
    el.appendChild(h); el.appendChild(when);
    v.parts.forEach(function (p) {
      if (p.head) { var h4 = document.createElement("h4"); h4.textContent = p.head; el.appendChild(h4); }
      var u = document.createElement("ul");
      p.items.forEach(function (it) {
        var li = document.createElement("li");
        inline(li, cut && it.length > 600 ? it.slice(0, 600) + "…" : it);
        u.appendChild(li);
      });
      el.appendChild(u);
    });
    return el;
  }
  function fail(where, text) {
    if (!where) return;
    where.textContent = "";
    var n = document.createElement("div"); n.className = "note";
    var p = document.createElement("p"); p.className = "when"; p.textContent = text;
    n.appendChild(p); where.appendChild(n);
  }
  fetch(NOTES_URL, { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }).then(function (md) {
    var versions = parse(md);
    if (!versions.length) throw new Error("empty");
    var newest = versions[0].title.split("·")[0].replace(/^Version\s*/i, "").trim();
    versionSpots.forEach(function (el) { el.textContent = newest; });
    if (preview) {
      preview.textContent = "";
      versions.slice(0, 2).forEach(function (v, i) { preview.appendChild(card(v, i === 0, true)); });
    }
    if (full) {
      full.textContent = "";
      versions.forEach(function (v, i) { full.appendChild(card(v, i === 0, false)); });
      if (toc) {
        toc.textContent = "";
        versions.forEach(function (v) {
          var a = document.createElement("a"); a.href = "#" + slug(v);
          var bits = v.title.split("·");
          a.textContent = bits[0].replace(/^Version\s*/i, "").trim();
          if (bits[1]) { var s = document.createElement("small"); s.textContent = bits[1].trim(); a.appendChild(s); }
          toc.appendChild(a);
        });
      }
      if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
    }
  }).catch(function () {
    fail(preview, "The patch notes couldn't be loaded right now.");
    fail(full, "The patch notes couldn't be loaded right now.");
  });
})();
