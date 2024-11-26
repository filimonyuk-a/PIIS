const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let startX, startY;
let currentShape;

let shapes = [];

canvas.addEventListener('mousedown', event => {
	isDrawing = true;
	startX = event.offsetX;
	startY = event.offsetY;

	const shapeSelector = document.getElementsByName('shape');
	let selectedValue;
	for (const shape of shapeSelector) {
		if (shape.checked) {
			selectedValue = shape.value;
			break;
		}
	}

	currentShape = selectedValue;
});

canvas.addEventListener('mousemove', event => {
	if (!isDrawing) return;

	const currentX = event.offsetX;
	const currentY = event.offsetY;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (const shape of shapes) {
        ctx.beginPath();
		if (shape.type === 'circle') {	
			ctx.arc(shape.startX, shape.startY, shape.radius, 0, Math.PI * 2);
			ctx.fillStyle = 'rgba(0, 255, 255, 1)';	
		} else if (shape.type === 'rectangle') {
			ctx.fillStyle = 'rgba(255, 255, 0, 1)';
			ctx.fillRect(shape.startX, shape.startY, shape.width, shape.height);
		}
        ctx.fill();
		ctx.closePath();
	}

	if (currentShape === 'circle') {
		const radius = Math.sqrt(
			Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2)
		);
		
		ctx.arc(startX, startY, radius, 0, Math.PI * 2);
		ctx.fillStyle = 'rgba(0, 255, 255, 1)';
		ctx.fill();
		
	} else if (currentShape === 'rectangle') {
		const width = currentX - startX;
		const height = currentY - startY;
		ctx.fillStyle = 'rgba(255, 255, 0, 1)';
		ctx.fillRect(startX, startY, width, height);
	}
});

canvas.addEventListener('mouseup', event => {
	isDrawing = false;

	const currentX = event.offsetX;
	const currentY = event.offsetY;

	if (currentShape === 'circle') {
		const radius = Math.sqrt(
			Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2)
		);
		shapes.push({
			type: 'circle',
			startX: startX,
			startY: startY,
			radius: radius,
		});
		
	} else if (currentShape === 'rectangle') {
		const width = currentX - startX;
		const height = currentY - startY;
		shapes.push({
			type: 'rectangle',
			startX: startX,
			startY: startY,
			width: width,
			height: height,
		});
		
	}

	currentShape = null;
});