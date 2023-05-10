const menu = document.querySelector(".menu")
const navLinks = document.querySelector(".nav-links")

menu.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})
//navbar end

//services
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

const card = document.querySelectorAll('.card');

card.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
})
