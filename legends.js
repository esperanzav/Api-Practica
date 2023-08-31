const containerLegeds= document.querySelector('.container-legends')



fetch(`https://evertofd.github.io/API/lol.json`)
.then((res)=> res.json())
.then((dataNew)=> {
    //console.log(data)

    const data1 = dataNew.data;
    let contador=0;// para contar
    for (const propiedad in data1) {// data es el objeto // y la propiedad es la propiedad del objeto
     
      if (data1.hasOwnProperty(propiedad)) {
        
        const valor = data1[propiedad];
        console.log(valor);

        contador++;
        if(contador===7){
          break;
        }
        
const card = document.createElement('div');
card.classList.add('legends-block');// es la caja de las tarjetas- las blancas

const spriteContainer = document.createElement('div');
spriteContainer.classList.add('img-container');//el blob-container

         
          //LLAMAMOS A LA IMAGEN
  
          //NOTA: EL sprites es la propiedad donde esta la imagen
const sprite = document.createElement('img');// creamos  y llamamos la imagen
sprite.classList.add('img9')
sprite.src = valor.img

spriteContainer.appendChild(sprite)

          //LLAMAMOS AL NOMBRE
  
const name = document.createElement('p')
name.classList.add('name');
name.textContent= valor.name// es una de las propiedades del objeto

           //LLAMAMOS AL TITULO
const title = document.createElement('p')
title.classList.add('title');
title.textContent= valor.title

            //agremos todos a la carte con appenchild
card.appendChild(spriteContainer)
card.appendChild(name)
card.appendChild(title)

containerLegeds.appendChild(card)// lo mandamos al div del DOM HTML
          }


     }
}) 

    
 




