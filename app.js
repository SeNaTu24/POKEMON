const baseURL = "data:image/jpeg;base64,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"
const container = document.querySelector('#container')
for (let i = 0; i <= 100; i++) {


   const pokemon = document.createElement("div")
   pokemon.classList.add('pokemon')

   const label = document.createElement("span")
   label.innerText = `${i}`
   const newImg = document.createElement("img")
   newImg.src = `${baseURL}`

   pokemon.appendChild(newImg)
   pokemon.appendChild(label)
   container.appendChild(pokemon)
}

// `${baseURL} ${i}.png`