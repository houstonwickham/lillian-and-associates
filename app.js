const menu = document.querySelector('#toggle');
const nav = document.querySelector('#header-nav')

menu.addEventListener('click', () => {
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'flex';
        menu.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        nav.style.display = 'none';
        menu.innerHTML = '<i class="fas fa-bars"></i>';
    }
  })
