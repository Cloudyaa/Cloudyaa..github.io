const btn = document.querySelector('.collapse-projects');
const moreInfo = document.querySelectorAll('.more-info');
const moreInfoLink = document.querySelectorAll('.more-info-link');


btn.addEventListener('click', () => {
    btn.innerText !== 'Hide' ? btn.innerText = 'Hide' : btn.innerText = 'See more';
    const moreProjects = document.querySelector('.more');
    moreProjects.classList.toggle('collapsing');
})

for (const one of moreInfoLink) {
    one.classList.add('d-none');
}




