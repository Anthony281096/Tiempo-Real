document.addEventListener("DOMContentLoaded", function(event) {

    var slider = document.querySelector('.header__slider')
    slider.innerHTML += slider.innerHTML;

    if (sessionStorage.getItem('alert') == null) {
    
        var alert = document.querySelector('.alerts');
    
        alert.style.display = 'flex';
    
        setTimeout(() => {
            alert.classList.add('fade');
        }, 3000);
        
        setTimeout(() => {
            alert.style.display = 'none';
        }, 3400);
        
        sessionStorage.setItem('alert', 1);

    }

});