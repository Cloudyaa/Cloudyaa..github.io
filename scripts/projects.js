const btn = document.querySelector('.collapse-projects');


btn.addEventListener('click', () => {
    btn.innerText !== 'Hide' ? btn.innerText = 'Hide' : btn.innerText = 'See more';
    const moreProjects = document.querySelector('.more');
    moreProjects.classList.toggle('collapsing');
})

