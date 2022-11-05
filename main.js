// Event Listener

button = document.querySelector('.btn');

button.addEventListener('mouseout', (e) =>{
    e.preventDefault();
    document.querySelector('.btn').style.background = '#cc12fc';
    document.querySelector('.container').classList.add('bg-dark');
})