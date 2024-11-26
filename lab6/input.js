const targets = document.querySelectorAll('.target');
let isDragging = false;
let isSticky = false;
let offsetX, offsetY;
let currentElement = null;
let originalPosition = { top: 0, left: 0 };
const minSize = 40;

const updatePosition = (event) => {
    const touch = event.touches ? event.touches[0] : event;
    if (currentElement) {
        currentElement.style.left = (touch.clientX - offsetX) + 'px';
        currentElement.style.top = (touch.clientY - offsetY) + 'px';
    }
};

// Обработчик для touchstart в режиме "следующий за пальцем"
const handleTouchStartForSticky = (event) => {
    if (isSticky) {
        isDragging = true;
        const touch = event.touches[0];
        offsetX = touch.clientX - currentElement.getBoundingClientRect().left;
        offsetY = touch.clientY - currentElement.getBoundingClientRect().top;
    }
};

targets.forEach(target => {
    target.addEventListener('mousedown', (event) => {
        if (isSticky) return;

        isDragging = true;
        currentElement = target;

        offsetX = event.clientX - target.getBoundingClientRect().left;
        offsetY = event.clientY - target.getBoundingClientRect().top;
    });

    target.addEventListener('touchstart', (event) => {
        if (isSticky) {
            currentElement = target;
            handleTouchStartForSticky(event);
        } else {
            isDragging = true;
            currentElement = target;

            const touch = event.touches[0];
            offsetX = touch.clientX - target.getBoundingClientRect().left;
            offsetY = touch.clientY - target.getBoundingClientRect().top;
        }
    });

    target.addEventListener('dblclick', () => {
        isSticky = true;
        if (currentElement !== target) {
            currentElement = target;
            originalPosition.top = target.style.top;
            originalPosition.left = target.style.left;
        }
        target.style.backgroundColor = 'blue';
    });

    target.addEventListener('click', () => {
        if (isSticky && currentElement === target) {
            isSticky = false;
            currentElement.style.backgroundColor = 'red';
            currentElement = null;
        }
    });
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        updatePosition(event);
    }
});

document.addEventListener('touchmove', (event) => {
    if (isDragging) {
        updatePosition(event);
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        currentElement = null;
    }
});

document.addEventListener('touchend', (event) => {
    if (isDragging) {
        isDragging = false;
        currentElement = null;
    }
});

document.addEventListener('touchstart', (event) => {
    if (event.touches.length > 1) { 
        if (currentElement) {
            currentElement.style.top = originalPosition.top;
            currentElement.style.left = originalPosition.left;
            isDragging = false;
            isSticky = false;
            currentElement.style.backgroundColor = 'red';
            currentElement = null;
        }
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && currentElement) {
        currentElement.style.top = originalPosition.top;
        currentElement.style.left = originalPosition.left;
        isDragging = false;
        isSticky = false;
        currentElement.style.backgroundColor = 'red';
        currentElement = null;
    }
});