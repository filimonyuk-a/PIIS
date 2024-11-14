let peretaskivanie = false; // перетаскивание
let lipkiy = false; // липкий
let smeshenieX, smeshenieY; // смещение
let tekushchiyElement = null; // текущий элемент
let nachalnayaPozitsiya = { top: 0, left: 0 }; // начальная позиция

document.addEventListener('DOMContentLoaded', () => {
const elementi = document.querySelectorAll('.target'); // элементы

 elementi.forEach(element => {
 element.addEventListener('mousedown', (event) => {
 if (lipkiy) return; 
peretaskivanie = true;
tekushchiyElement = element;
nachalnayaPozitsiya.top = tekushchiyElement.style.top; 
 nachalnayaPozitsiya.left = tekushchiyElement.style.left;
smeshenieX = event.clientX - element.getBoundingClientRect().left;
smeshenieY = event.clientY - element.getBoundingClientRect().top;
});
element.addEventListener('click', () => {
if (lipkiy && tekushchiyElement === element) {
lipkiy = false;
tekushchiyElement.style.backgroundColor = 'red';
tekushchiyElement = null; 
}
});
 element.addEventListener('dblclick', () => {
 lipkiy = true;
if (tekushchiyElement !== element) {
 tekushchiyElement = element;
nachalnayaPozitsiya.top = element.style.top;
 nachalnayaPozitsiya.left = element.style.left;
 }
 element.style.backgroundColor = 'blue'; 
});
});

document.addEventListener('keydown', (event) => {
if (event.key === 'Escape' && tekushchiyElement) {
 tekushchiyElement.style.top = nachalnayaPozitsiya.top;
tekushchiyElement.style.left = nachalnayaPozitsiya.left;
peretaskivanie = false;
lipkiy = false;
 tekushchiyElement.style.backgroundColor = 'red'; 
 tekushchiyElement = null;
}
});

document.addEventListener('mousemove', (event) => {
if (peretaskivanie && tekushchiyElement) {
tekushchiyElement.style.left = (event.clientX - smeshenieX) + 'px';
tekushchiyElement.style.top = (event.clientY - smeshenieY) + 'px';
 } else if (lipkiy && tekushchiyElement) {
 tekushchiyElement.style.left = (event.clientX - smeshenieX) + 'px';
 tekushchiyElement.style.top = (event.clientY - smeshenieY) + 'px';
 }
});

document.addEventListener('mouseup', () => {
 if (peretaskivanie) {
 peretaskivanie = false;
 tekushchiyElement = null;
}
});
})