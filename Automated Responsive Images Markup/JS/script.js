const EXTLINKS = document.querySelectorAll('a[href^="http"]');
const IMAGES = document.querySelectorAll("img");
const SIZES = {
    showcase : "100vw",
    reason : "(max-width: 799px) 100vw, 372px",
    feature : "(max-width: 799px) 100vw, 558px",
    story : "(max-width: 799px) 100vw, 670px",
};

// To make all external links in the page to open in new tab when clicked
for (var i = 0; i < EXTLINKS.length ; i++) {
    if( !EXTLINKS[i].hasAttribute("target")) {
        EXTLINKS[i].setAttribute("target", "_blank");
    }
}

function MakeSrcSet(imgSrc) {
    let markUp = [];
    let width = 400;

    for (let i = 0; i < 5; i++) {
        markUp[i] = imgSrc + "-" + width + ".jpg " + width + "w";
        width += 400;
    }

    return markUp.join();
}

for (let i = 0; i < IMAGES.length ; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.slice(0, -8);
    let srcSet = MakeSrcSet(imgSrc);
    IMAGES[i].setAttribute("srcset", srcSet);

    let type = IMAGES[i].getAttribute("data-type");
    let sizes = SIZES[type];
    IMAGES[i].setAttribute("sizes", sizes);
}