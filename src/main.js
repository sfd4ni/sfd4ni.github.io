// Number of slides (You can change this to 50 or any other number)
const totalSlides = 20;

const videos = ["https://www.youtube.com/embed/WEC52d9dpBQ?si=QR-F9syuvd7FHDQ_", "https://www.youtube.com/embed/wbTrL_ME7-k?si=idJ74ZuMMHxR0hky",
  "https://www.youtube.com/embed/-dsJjxjEyfo?si=CYhaAb7Nvj8sXIGb", "https://www.youtube.com/embed/kG_Dxawxmxk?si=UCjdyA-AhRoWEEa4",
  "https://www.youtube.com/embed/n1yVGahQw5M?si=3naDu9OgMc4n1uwP", "https://www.youtube.com/embed/DeYyfTIdbWs?si=y2YqwpwXnVoAz2Qy",
  "https://www.youtube.com/embed/5JqergZo1M8?si=i2WkFTla7YVEsF5V", "https://www.youtube.com/embed/JCYex-SI2E4?si=Q5vG7eM7LI3DYS1i", 
  "https://www.youtube.com/embed/nSIQYriIkEU?si=uhE0WEFpSim556jk", "https://www.youtube.com/embed/k4l6636sPzU?si=JkJ86bw3CvCZ4s_B",
  "https://www.youtube.com/embed/KDK3i6xyno0?si=qge6j4VLOt9ebYLA", "https://www.youtube.com/embed/XyODSqOUeC8?si=QuOZX_-k02ZRmR8e",
  "https://www.youtube.com/embed/CIZD8etf51U?si=cESEj0R5lIG_noiO", "https://www.youtube.com/embed/lOlRVvXMmfY?si=XinHgodQTqnP_lYS",
  "https://www.youtube.com/embed/o8PdBKNr62A?si=mFjOuuZlMaSx4_Et", "https://www.youtube.com/embed/QUKXHH30JQs?si=ulxtRLrM9oOS0Eic"
]
const imagenes = ["safe_and_sound.png", "fix_you.png", "sunday_morning.jpg", "linger.png", "duvet.png", "dango_daikazoku.png", "theylongtobe.png",
  "snake_eater.png", "yellow.png", "do_you_think_im_sexy.jpg", "something_stupid.png", "iris.png", "wake_me_up.jpg", "viva_la_vida.jpg", "alright.png",
  "you_are_gonna_go_far_kid.png"];
  const imagenesOg = ["safe_and_sound_og.jpg", "fix_you_og.jpg", "sunday_morning_og.jpg", "linger_og.jpg", "duvet_og.jpg", "dango_daikazoku_og.jpg", "they_long_to_be_og.jpg",
    "snake_eater_og.jpg", "yellow_og.jpg", "do_you_think_im_sexy_og.jpg", "something_stupid_og.jpeg", "iris_og.jpg", "wake_me_up_og.jpg", "viva_la_vida_og.jpg", "alright_og.jpg",
    "you_are_gonna_go_far_kid_og.jpg"];
const artistas = ["NameLater", "NameLater", "Sahelanthropus", "Ryoshi", "Gestalt", "NameLater", "Ryoshi",
  "NameLater", "Nini IV", "Sahelanthropus", "Ryoshi", "NameLater", "Arteries", "Sahelanthropus", "Nini IV",
  "NameLater"];
const songTitles = ["Safe and Sound", "NameLater", "Sahelanthropus", "Ryoshi", "Gestalt", "NameLater", "Ryoshi",
    "NameLater", "Nini IV", "Sahelanthropus", "Ryoshi", "NameLater", "Arteries", "Sahelanthropus", "Nini IV",
    "NameLater"];
const originalSongArtists = ["Capital Cities", "NameLater", "Sahelanthropus", "Ryoshi", "Gestalt", "NameLater", "Ryoshi",
  "NameLater", "Nini IV", "Sahelanthropus", "Ryoshi", "NameLater", "Arteries", "Sahelanthropus", "Nini IV",
  "NameLater"];
const albumNames = ["In a Tidal Wave of Mystery", "NameLater", "Sahelanthropus", "Ryoshi", "Gestalt", "NameLater", "Ryoshi",
  "NameLater", "Nini IV", "Sahelanthropus", "Ryoshi", "NameLater", "Arteries", "Sahelanthropus", "Nini IV",
  "NameLater"];

// Array to store slide data (just using placeholder images for this example)
const slideData = Array.from({ length: totalSlides }, (_, i) => ({
  id: i,
  imageOgUrl: imagenesOG[i],
  imageUrl: imagenes[i],
  youtubeUrl: videos[i],
  originalArtistText: `> Original artist: ${artistas[i]}`,
  songTitle: `> Song title: ${songTitles[i]}`,
  originalSongArtist: `> Singer: ${originalSongArtists[i]}`,
  albumName: `> Album name: ${albumNames[i]}`
}));

let currentIndex = 0;

// Create carousel items dynamically
function createCarouselItems() {
  const carousel = document.querySelector('.carousel');
  carousel.innerHTML = ''; // Clear existing items

  slideData.forEach(item => {
    const contentSlide = document.createElement('div');
    contentSlide.classList.add('content-slide');
    const bgSlide = document.createElement('div');
    bgSlide.classList.add('bg-slide');
    const slide = document.createElement('div');
    slide.classList.add('carousel-item');
    //slide.style.backgroundImage = `url(./resources/${item.imageUrl})`;
    
    
    
    
    
    
    
    // Image with text
    const pokoCoverArt = document.createElement('div');
    pokoCoverArt.classList.add('poko-cover-art');
    const imageText = document.createElement('img');
    //const bgSlide = document.createElement('div');
    //contentSlide.classList.add('bg-slide');
    if (typeof item.imageUrl !== 'undefined') {  
      imageText.src = `./resources/${item.imageUrl}`;
      slide.style=`background-image: url('./resources/${item.imageUrl}')`;
    }

    const textPoko = document.createElement('div');
    textPoko.classList.add('text-poko');
    textPoko.textContent = item.originalArtistText;
    

    // Column 2: YouTube video and image with text
    // YouTube video
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');
    const iframe = document.createElement('iframe');
    if (typeof item.youtubeUrl !== 'undefined') {
      iframe.src = item.youtubeUrl;

    }
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowfullscreen = true;
    videoContainer.appendChild(iframe);

    // Column 2: Image
    const originalImageDiv = document.createElement('div');
    const originalImageDivFila2 = document.createElement('div');
    originalImageDiv.classList.add('original-image-div');
    originalImageDivFila2.classList.add('original-image-div-fila2');

    const image = document.createElement('img');
    if (typeof item.imageOgUrl !== 'undefined') {  
      image.src = `./resources/${item.imageOgUrl}`;
    }
    
    const textOriginal = document.createElement('div');
    textOriginal.classList.add('text-original');
    const propertiesList = document.createElement('ul');

    const songTitle = document.createElement('li');
    songTitle.textContent = item.songTitle;

    const originalSongArtist = document.createElement('li');
    originalSongArtist.textContent = item.originalSongArtist;

    const albumName = document.createElement('li');
    albumName.textContent = item.albumName;

    const artist = document.createElement('li');
    artist.textContent = item.originalArtistText;

    propertiesList.appendChild(songTitle);
    propertiesList.appendChild(originalSongArtist);
    propertiesList.appendChild(albumName);
    propertiesList.appendChild(artist);


    originalImageDiv.appendChild(videoContainer);
    originalImageDivFila2.appendChild(image);
    originalImageDivFila2.appendChild(textOriginal);
    originalImageDiv.appendChild(originalImageDivFila2);
    
    textOriginal.appendChild(propertiesList);
    pokoCoverArt.appendChild(imageText);
    //pokoCoverArt.appendChild(textPoko);
    
    //slide.appendChild(videoContainer);
    //slide.appendChild(bgSlide);
    contentSlide.appendChild(pokoCoverArt);
    contentSlide.appendChild(originalImageDiv);
    //slide.appendChild(bgSlide);
    bgSlide.appendChild(contentSlide);
    slide.appendChild(bgSlide);
    carousel.appendChild(slide);
  });
}

// Create navigation thumbnails dynamically
function createNavBar() {
  const navBar = document.querySelector('.nav-bar');
  navBar.innerHTML = ''; // Clear existing thumbnails

  slideData.forEach((item, index) => {
    const navItem = document.createElement('div');
    navItem.classList.add('nav-item');
    navItem.onclick = () => goToSlide(index);

    const thumbnail = document.createElement('img');
    if (typeof item.imageUrl !== 'undefined') {  
      thumbnail.src = `./resources/${item.imageOgUrl}`;
    }
    thumbnail.alt = `Thumbnail ${index + 1}`;
    navItem.appendChild(thumbnail);

    navBar.appendChild(navItem);
  });
}

// Move the carousel based on direction (prev or next)
function moveCarousel(direction) {
  const totalItems = slideData.length;
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  updateActiveNav(currentIndex);
}

// Jump to a specific slide
function goToSlide(index) {
  currentIndex = index;

  const carousel = document.querySelector('.carousel');
  console.log(currentIndex*100);
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  updateActiveNav(currentIndex);
}

// Highlight active thumbnail
function updateActiveNav(index) {
  const navItems = document.querySelectorAll('.nav-item img');
  navItems.forEach((img, i) => {
    if (i === index) {
      img.style.border = '2px solid #ff5733'; // Highlight active thumbnail
    } else {
      img.style.border = '2px solid transparent'; // Remove highlight from others
    }
  });
}

// Initialize the carousel and navigation bar
function initializeCarousel() {
  createCarouselItems();
  createNavBar();
  updateActiveNav(currentIndex);
}

initializeCarousel();  // Call the function to initialize everything
