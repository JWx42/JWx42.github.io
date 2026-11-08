// Remember a language explicitly chosen on the site. Both pages also work without JS.
try {
    const choice = localStorage.getItem("portfolio-language");
    if (location.pathname.endsWith("/") && choice === "ru") {
        location.replace("index_ru.html" + location.hash);
    }
    document.addEventListener("click", event => {
        const link = event.target.closest("a[data-language]");
        if (link) localStorage.setItem("portfolio-language", link.dataset.language);
    });
} catch { /* The language links still work when storage is unavailable. */ }
