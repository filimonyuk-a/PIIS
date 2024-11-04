const shirts = [{ //определение массива  содержит объекты представляющие майки
    "name": "Beep Boop",
    "description": "Once upon a time, a mighty guide guarded the intersection of Forbes and Morewood, and would dutifully direct distracted college students when it was safe to cross the street. Its voice was soothing, strong, and steady. Its name was beep boop.",
    "price": "$19.99",
    "colors": {
        "white": {
            "front": "shirt_images/beepboop-white-front.png",
            "back": "shirt_images/beepboop-white-back.png"
        },
        "blue": {
            "front": "shirt_images/beepboop-blue-front.png",
            "back": "shirt_images/beepboop-blue-back.png"
        },
        "pink": {
            "front": "shirt_images/beepboop-pink-front.png",
            "back": "shirt_images/beepboop-pink-back.png"
        },
        "red": {
            "front": "shirt_images/beepboop-red-front.png",
            "back": "shirt_images/beepboop-red-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-m-front.png",
        "back": "shirt_images/default-m-back.png"
    }
},
{
    "name": "Car",
    "description": "As you move in to campus, one of the first memories so many students have is driving up to their dorm, unloading their bags, and moving in. How do they arrive to campus? By car, of course!",
    "price": "$10.99",
    "colors": {
        "white": {
            "front": "shirt_images/car-white-front.png",
            "back": "shirt_images/car-white-back.png"
        },
        "blue": {
            "front": "shirt_images/car-blue-front.png",
            "back": "shirt_images/car-blue-back.png"
        },
        "green": {
            "front": "shirt_images/car-green-front.png",
            "back": "shirt_images/car-green-back.png"
        },
        "yellow": {
            "front": "shirt_images/car-yellow-front.png",
            "back": "shirt_images/car-yellow-back.png"
        },
        "red": {
            "front": "shirt_images/car-red-front.png",
            "back": "shirt_images/car-red-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-w-front.png",
        "back": "shirt_images/default-w-back.png"
    }
},

{
    "name": "Forever Plaid",
    "price": "$13.99",
    "description": "Proudly wear your tartan plaid as a patch on your front shirt pocket. And on the back, ask the important question that all CMU students should know the answer to: got plaid?",
    "colors": {
        "white": {
            "front": "shirt_images/plaid-white-front.png",
            "back": "shirt_images/plaid-white-back.png"
        },
        "pink": {
            "front": "shirt_images/plaid-pink-front.png",
            "back": "shirt_images/plaid-pink-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-w-front.png",
        "back": "shirt_images/default-w-back.png"
    }
},
{
    "name": "BSUIR",
    "description": "BSUIR mission is to train engineers and scientists capable of generating and implementing innovative ideas, creating competitive high technology products in the spheres of computer science and electronics.",
    "price": "$6.99",
    "colors": {
        "white": {
            "front": "shirt_images/bsuir-white-front.png",
            "back": "shirt_images/bsuir-white-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-m-front.png",
        "back": "shirt_images/default-m-back.png"
    }
}];
//2
let quickViewOpen = false;
//2
document.addEventListener('DOMContentLoaded', ()=> {
   
    makeCards()
    const quickViewsButtons = document.getElementsByClassName('view-button') 
    for(let i=0; i<quickViewsButtons.length; i++){
        quickViewsButtons[i].addEventListener('click', ()=>{ 
          //2
            if(quickViewOpen ==  false){
                quickViewOpen = true;
                quickViewPress(quickViewsButtons[i].id[quickViewsButtons[i].id.length-1])
            //2
            }
    })
}
})

function makeCards(){
    const divCards = document.getElementsByClassName('cards')
    for(let i = 0; i< shirts.length; i++){
        const div = document.createElement('div');
        div.classList.add('card')
        divCards[0].appendChild(div)
        const img = document.createElement('img')
        img.classList.add('image')
        div.appendChild(img)
        const h2 = document.createElement('h2')
        div.appendChild(h2)
        const p = document.createElement('p')
        div.appendChild(p)
        const buttonsDiv = document.createElement('div')
        buttonsDiv.classList.add('buttons')
        div.appendChild(buttonsDiv)
        const viewBut = document.createElement('button')
        viewBut.innerHTML = "Quick View"
        viewBut.classList.add('view-button')
        viewBut.id = `view-${i}`
        buttonsDiv.appendChild(viewBut)
        const seeBut = document.createElement('button')
        seeBut.innerHTML = "See page"
        seeBut.setAttribute('href','details.html')
        buttonsDiv.appendChild(seeBut)
        if(shirts[i].colors.white.front){
            img.src = shirts[i].colors.white.front//URL-адрес изображения передней стороны белой майки.
        } 
        img.alt = " here is shirt"
        if(shirts[i].name){
            h2.textContent = shirts[i].name
        } 
        let color = shirts[i].colors
       //sd
        p.textContent = Object.keys(color).length.toString()
        seeBut.addEventListener('click', ()=>{
            seeButPress(shirts[i])
            //2
        })
    }
}
function quickViewPress(index){

        const container = document.getElementsByClassName('container')
    const viewDiv = document.createElement('div')
    container[0].appendChild(viewDiv)
    viewDiv.classList.add('view-container')
    const viewContent = document.createElement('div')
    viewContent.classList.add('view-content')
    viewDiv.appendChild(viewContent)
    const imagesDiv = document.createElement('div')
    imagesDiv.classList.add('view-images')
    const img1 = document.createElement('img')
    imagesDiv.appendChild(img1)
    const img2 = document.createElement('img')
    imagesDiv.appendChild(img2)
    viewContent.appendChild(imagesDiv)
    const viewText = document.createElement('div')
    viewText.classList.add('view-text-container')
    viewContent.appendChild(viewText)
    const h2 = document.createElement('h2')
    viewText.appendChild(h2)
    const h3 = document.createElement('h3')
    viewText.appendChild(h3)
    const but = document.createElement('button')
    viewText.appendChild(but)
    img1.src = shirts[index].colors.white.front
    img2.src = shirts[index].colors.white.back
    h2.textContent = shirts[index].name
    h3.textContent = shirts[index].price
    but.innerHTML = "Close"
    but.classList.add('view-close-but')
    but.addEventListener('click', ()=>{
        viewDiv.remove()
       
        quickViewOpen = false
    })
  }

  function seeButPress(shirt){
    localStorage.setItem('name',shirt.name)
    localStorage.setItem('price', shirt.price)
    localStorage.setItem('description',shirt.description)
    let shirtColors = Object.keys(shirt.colors)
    console.log(shirtColors)
    localStorage.setItem('colors',shirtColors)
    for(let i=0; i<shirtColors.length; i++){
        console.log('llll')
        localStorage.setItem(shirtColors[i]+'-f', shirt.colors[shirtColors[i]].front)
        console.log(shirt.colors[shirtColors[i]].front)
        localStorage.setItem(shirtColors[i]+'-b', shirt.colors[shirtColors[i]].back)
    }
    window.location.href = "details.html"
}

  