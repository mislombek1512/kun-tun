let header = document.querySelector('header');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // header.setAttribute('style', `background: url('img/tun.jpg');`);
    header.classList.toggle('tun');
    if(btn.classList.contains('bi-moon-fill')){
        btn.classList.remove('bi-moon-fill');
        btn.classList.add('bi-brightness-high-fill');
    } else {
        btn.classList.add('bi-moon-fill');
        btn.classList.remove('bi-brightness-high-fill');
    }
});