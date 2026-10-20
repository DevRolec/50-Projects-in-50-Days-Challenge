
// SELECT HTML ELEMENTS

const gallery = document.getElementById("gallery");
const filterButtons = document.querySelectorAll(".filter-btn");
const imageCount = document.getElementById("imageCount");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDescription = document.getElementById(
    "lightboxDescription"
);
const imagePosition = document.getElementById("imagePosition");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


// IMAGE DATA

const images = [
    {
        id: 1,
        title: "Mountain Lake",
        category: "nature",
        description: "A peaceful lake surrounded by mountains.",
        src: "images/nature1.jpg"
    },
    {
        id: 2,
        title: "Green Forest",
        category: "nature",
        description: "Beautiful trees in a green forest.",
        src: "images/nature2.jpg"
    },
    {
        id: 3,
        title: "African Lion",
        category: "animals",
        description: "A lion resting in the savannah.",
        src: "images/animal1.jpg"
    },
    {
        id: 4,
        title: "Colourful Bird",
        category: "animals",
        description: "A beautiful bird in its natural habitat.",
        src: "images/animal2.jpg"
    },
    {
        id: 5,
        title: "Modern Building",
        category: "architecture",
        description: "Contemporary architectural design.",
        src: "images/architecture1.jpg"
    },
    {
        id: 6,
        title: "City Skyline",
        category: "architecture",
        description: "Tall buildings overlooking a city.",
        src: "images/architecture2.jpg"
    },
    {
        id: 7,
        title: "Tropical Beach",
        category: "travel",
        description: "A relaxing beach destination.",
        src: "images/travel1.jpg"
    },
    {
        id: 8,
        title: "Adventure Road",
        category: "travel",
        description: "A scenic road through the countryside.",
        src: "images/travel2.jpg"
    }
];


// APPLICATION VARIABLES

let filteredImages = [...images];
let currentIndex = 0;
let lastFocusedElement = null;


// DISPLAY GALLERY IMAGES

function displayImages(imageArray) {

    gallery.innerHTML = "";

    imageArray.forEach(function(image) {

        // Create image card
        const card = document.createElement("button");
        card.type = "button";
        card.className = "gallery-card";

        // Create image element
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.title;
        img.loading = "lazy";

        // Create content container
        const content = document.createElement("div");
        content.className = "gallery-card-content";

        // Create image title
        const title = document.createElement("h3");
        title.textContent = image.title;

        // Create category text
        const category = document.createElement("p");
        category.textContent = image.category;

        // Add title and category
        content.appendChild(title);
        content.appendChild(category);

        // Add elements to card
        card.appendChild(img);
        card.appendChild(content);

        // Open lightbox when card is clicked
        card.addEventListener("click", function() {

            const index = filteredImages.findIndex(
                item => item.id === image.id
            );

            openLightbox(index);

        });

        // Add card to gallery
        gallery.appendChild(card);

    });

    // Update image count
    imageCount.textContent =
        `${imageArray.length} ${
            imageArray.length === 1 ? "image" : "images"
        }`;
}


// FILTER IMAGES

function filterImages(category) {

    if (category === "all") {

        filteredImages = [...images];

    } else {

        filteredImages = images.filter(function(image) {
            return image.category === category;
        });

    }

    displayImages(filteredImages);
}


// FILTER BUTTON EVENTS

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.category;

        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Highlight selected button
        button.classList.add("active");

        // Display matching images
        filterImages(selectedCategory);

    });

});


// OPEN LIGHTBOX

function openLightbox(index) {

    if (index < 0 || index >= filteredImages.length) {
        return;
    }

    currentIndex = index;
    lastFocusedElement = document.activeElement;

    updateLightbox();

    lightbox.hidden = false;
    document.body.classList.add("modal-open");

    closeBtn.focus();
}


// UPDATE LIGHTBOX CONTENT

function updateLightbox() {

    const image = filteredImages[currentIndex];

    if (!image) {
        return;
    }

    lightboxImage.src = image.src;
    lightboxImage.alt = image.title;

    lightboxTitle.textContent = image.title;

    lightboxDescription.textContent = image.description;

    imagePosition.textContent =
        `${currentIndex + 1} / ${filteredImages.length}`;
}


// CLOSE LIGHTBOX

function closeLightbox() {

    lightbox.hidden = true;

    document.body.classList.remove("modal-open");

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}


// SHOW NEXT IMAGE

function nextImage() {

    currentIndex =
        (currentIndex + 1) % filteredImages.length;

    updateLightbox();
}


// SHOW PREVIOUS IMAGE

function previousImage() {

    currentIndex =
        (currentIndex - 1 + filteredImages.length)
        % filteredImages.length;

    updateLightbox();
}


// BUTTON EVENTS

closeBtn.addEventListener("click", closeLightbox);

nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", previousImage);


// CLOSE WHEN CLICKING OUTSIDE CONTENT

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


// KEYBOARD NAVIGATION

document.addEventListener("keydown", function(event) {

    if (lightbox.hidden) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }

    // Keep keyboard focus inside the modal
    if (event.key === "Tab") {

        const controls = [closeBtn, prevBtn, nextBtn];
        const first = controls[0];
        const last = controls[controls.length - 1];

        if (event.shiftKey &&
            document.activeElement === first) {

            event.preventDefault();
            last.focus();

        } else if (
            !event.shiftKey &&
            document.activeElement === last
        ) {

            event.preventDefault();
            first.focus();
        }
    }

});


// INITIALIZE GALLERY

displayImages(filteredImages);
