const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')
let photosArray = []
const count = 10
const apiKey = 'N-9nDaQ-qArEv0xxEILmxxF0C6Q9ovS221NcPBp-5lU'
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

function displayPhoto() {
  photosArray.forEach((photo) => {
    const item = document.createElement('a')
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    })
    const img = document.createElement('img')
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    })
    item.appendChild(img)
    imageContainer.appendChild(item)
  })
}
async function getPhotos() {
  try {
    const response = await fetch(apiUrl)
    photosArray = await response.json()
    displayPhoto()
  } catch (error) {}
}
getPhotos()
