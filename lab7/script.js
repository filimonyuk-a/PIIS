const svgCanvas = document.getElementById('canvas');

let drawingActive = false;
let initialX, initialY, shapeBeingDrawn;

svgCanvas.addEventListener('mousedown', event => {
    drawingActive = true;
    initialX = event.offsetX;
    initialY = event.offsetY;

    const selectedShape = Array.from(document.getElementsByName('shape')).find(shape => shape.checked)?.value;

    shapeBeingDrawn = document.createElementNS('http://www.w3.org/2000/svg', selectedShape === 'circle' ? 'circle' : 'rect');
    if (selectedShape === 'circle') {
        shapeBeingDrawn.setAttribute('cx', initialX);
        shapeBeingDrawn.setAttribute('cy', initialY);
        shapeBeingDrawn.setAttribute('r', 0);
        shapeBeingDrawn.setAttribute('fill', 'rgba(0, 255, 255, 1)');
    } else if (selectedShape === 'rectangle') {
        shapeBeingDrawn.setAttribute('x', initialX);
        shapeBeingDrawn.setAttribute('y', initialY);
        shapeBeingDrawn.setAttribute('width', 0);
        shapeBeingDrawn.setAttribute('height', 0);
        shapeBeingDrawn.setAttribute('fill', 'rgba(255, 255, 0, 1)');
    }
    svgCanvas.appendChild(shapeBeingDrawn);
});

svgCanvas.addEventListener('mousemove', event => {
    if (!drawingActive) return;

    const currentX = event.offsetX;
    const currentY = event.offsetY;

    if (shapeBeingDrawn.tagName === 'circle') {
        const radius = Math.sqrt(Math.pow(currentX - initialX, 2) + Math.pow(currentY - initialY, 2));
        shapeBeingDrawn.setAttribute('r', radius);
    } else if (shapeBeingDrawn.tagName === 'rect') {
        const width = currentX - initialX;
        const height = currentY - initialY;

        shapeBeingDrawn.setAttribute('x', Math.min(initialX, currentX));
        shapeBeingDrawn.setAttribute('y', Math.min(initialY, currentY));
        shapeBeingDrawn.setAttribute('width', Math.abs(width));
        shapeBeingDrawn.setAttribute('height', Math.abs(height));
    }
});

svgCanvas.addEventListener('mouseup', () => {
    drawingActive = false;
    shapeBeingDrawn = null;
});