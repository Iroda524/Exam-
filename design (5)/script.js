let box = document.querySelectorAll('.box'),
    modal = document.querySelectorAll('.modal');

box[0].style.backgroundColor = '#3498dc'
box[1].style.backgroundColor = '#2ccc71'
box[2].style.backgroundColor = '#f39c13'
box[3].style.backgroundColor = '#e74c3c'
box[4].style.backgroundColor = '#9b59b6'
modal[0].style.opacity = '0'


box.forEach(elm => elm.addEventListener('click', () => {
    document.body.style.backgroundColor = elm.style.backgroundColor
}))

document.addEventListener('keydown', event => {
    if (event.key === 'Tab' && 'Shift') {
       modal[0].style.opacity = '1'
    }   
  });

