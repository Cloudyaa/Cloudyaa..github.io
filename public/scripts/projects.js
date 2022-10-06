const cont = document.querySelector('.cont');
const projectsLink = document.querySelector('.bi-window-fullscreen');
const projectsSection = document.querySelector('#projects-section');
const elsArr = [].slice.call(document.querySelectorAll('.el-box'));
const closeBtnsArr = [].slice.call(document.querySelectorAll('.el-close-btn'));

const timeOut = () => {
  setTimeout(() => {
    cont.classList.remove('cont-inactive');
  }, 200);
  clearTimeout();
};

projectsLink.addEventListener('click', timeOut);
projectsSection.addEventListener('mouseover', timeOut);

elsArr.forEach(el => {
  el.addEventListener('click', () => {
    if (el.classList.contains('cont-active')) return;
    cont.classList.add('el-active');
    el.classList.add('cont-active');
  });
});



closeBtnsArr.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    cont.classList.remove('el-active');
    document.querySelector('.cont-active').classList.remove('cont-active');
  });
});
