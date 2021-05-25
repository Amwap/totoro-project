

function show_photo(url){
    console.log(url)
    var photo = document.querySelector('.photo')
    photo.src = url

    var box = document.querySelector('.photo_container')
    box.style.display = "flex"
}

function hide_photo(){
    var box = document.querySelector('.photo_container')
    box.style.display = "none"
}