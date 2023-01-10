const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

// api
const count = 10
const apiKey = '13yiCsGCdjj4wA_UPrxQ0LexbdnQEVUXLF0-tCriyhg'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Halpers function to set attributes on DOM elements
function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

// Create Element for links & photos, Add to Dom
function displayPhotos(){
    // Run function for each object in photosArray
   photosArray.forEach((photo) => {
    const item = document.createElement('a')
    setAttributes(item, {
        href:photo.links.html,
        target:'_blank'
    })
    
    const img = document.createElement('img')
    setAttributes(img,{
        src:photo.urls.regular,
        alt:photo.alt_description,
        title:photo.alt_description,
    })
    item.appendChild(img)
    imageContainer.appendChild(item)
   
   })

}

// Get photos from Unsplash Api

async function getPhotos(){
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
        console.log(photosArray);
    } catch (error) {
        console.log(error);
    }
}

getPhotos()