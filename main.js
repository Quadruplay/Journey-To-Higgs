const md = markdownit({html:true}).use(texmath, { engine: katex, delimiters: 'dollars', katexOptions: { macros: {"\\RR": "\\mathbb{R}"} } } );

let selectors = sidebar.getElementsByTagName("a");
for (let selector of selectors) {
    selector.addEventListener("click", (event) => {
        let destination = selector.getAttribute("href");
        if (destination.endsWith(".md")) {
            event.preventDefault();
            fetch(destination)
            .then(response => response.text())
            .then(text => {
                content.innerHTML = md.render(text);
                let padding = document.createElement("div");
                padding.id = "padding";
                content.append(padding);
                window.scrollTo(0, 0);
            });
        }
    });
}