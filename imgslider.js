document.querySelectorAll('.project-image').forEach(gallery => {
    const imgs = [...gallery.querySelectorAll(':scope > img')];
    let current = 0;
    imgs[0].classList.add('active');

    gallery.querySelector('.prev').addEventListener('click', () => {
        imgs[current].classList.remove('active');
        current = (current - 1 + imgs.length) % imgs.length;
        imgs[current].classList.add('active');
    });

    gallery.querySelector('.next').addEventListener('click', () => {
        imgs[current].classList.remove('active');
        current = (current + 1) % imgs.length;
        imgs[current].classList.add('active');
    });
});