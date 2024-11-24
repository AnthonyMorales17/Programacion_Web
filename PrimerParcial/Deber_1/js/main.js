const title = document.querySelector('.card-content h2');
    
title.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'black';
});

title.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#fff';
});