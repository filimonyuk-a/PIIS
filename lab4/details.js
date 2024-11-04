document.addEventListener('DOMContentLoaded', ()=> {
    let imgColor = 'white'
    let imgSide = 'f'
    let forImage = imgColor + '-' + imgSide

    const container = document.getElementsByClassName('container')
    const nameOfShirt = document.createElement('h2')
    const shirtCard = document.createElement('div')
    const img = document.createElement('img')
    const textCont = document.createElement('div')
    const price = document.createElement('h2')
    const about = document.createElement('h4')
    const sideButtons = document.createElement('div')
    const frontButton = document.createElement('button')
    const backButton = document.createElement('button')
    const colorButtons = document.createElement('div')

    shirtCard.classList.add('shirt-card')
    price.classList.add('price')
    textCont.classList.add('text-content')
    sideButtons.classList.add('side-buttons')
    colorButtons.classList.add('color-buttons')
  
    container[0].appendChild(nameOfShirt)
    container[0].appendChild(shirtCard)
    shirtCard.appendChild(img)
    shirtCard.appendChild(textCont)
    textCont.appendChild(price)
    textCont.appendChild(about)
    textCont.appendChild(sideButtons)
    sideButtons.appendChild(frontButton)
    sideButtons.appendChild(backButton)
    textCont.appendChild(colorButtons)
    
    nameOfShirt.textContent = localStorage.getItem('name')
    price.textContent = localStorage.getItem('price')
    about.textContent = localStorage.getItem('description')
    img.src = localStorage.getItem(forImage)
    frontButton.textContent = 'Front'
    backButton.textContent = 'Back'
    let colors = localStorage.getItem('colors').split(',')
    for(let i = 0; i<colors.length; i++){
        const colorButton = document.createElement('button')
        colorButtons.appendChild(colorButton)
        colorButton.style.backgroundColor = colors[i]
        colorButton.innerHTML = colors[i]
        colorButton.addEventListener('click', ()=>{
            imgColor = colors[i]
            forImage = imgColor + '-' + imgSide
            img.src = localStorage.getItem(forImage)
        })
    }
    
    frontButton.addEventListener('click',()=> {
        imgSide = 'f'
        forImage = imgColor + '-' + imgSide
        img.src = localStorage.getItem(forImage)
    })
    backButton.addEventListener('click', ()=>{
        imgSide = 'b'
        forImage = imgColor + '-' + imgSide
        img.src = localStorage.getItem(forImage)
    })
})