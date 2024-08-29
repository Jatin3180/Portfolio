const navlinkEL = document.querySelectorAll('.nav_link');

navlinkEL.forEach(navlink => {
    navlinkEL.addEventListener('click', () =>{
        document.querySelector('.active')?.classList.remove('active');
        navlinkEL.classList.add('active');
    });
});