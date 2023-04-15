const main_img = document.querySelector('.main_img')		//contenedor principal
const thumbnails = document.querySelectorAll('.imagen')		//todas las imagenes

console.log(thumbnails)

thumbnails.forEach(thumb => {								//foreach
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = thumb.src
    })
})