import { camera } from './camera';
import { controls } from './controls';

// Función para mover la cámara a una posición específica basada en el eje seleccionado
const moveCameraToAxis = (axis: string) => {
    switch (axis) {
        case 'x':
            camera.position.set(5, 0, 0);
            break;
        case '-x':
            camera.position.set(-5, 0, 0);
            break;
        case 'y':
            camera.position.set(0, 5, 0);
            break;
        case '-y':
            camera.position.set(0, -5, 0);
            break;
        case 'z':
            camera.position.set(0, 0, 5);
            break;
        case '-z':
            camera.position.set(0, 0, -5);
            break;
        case 'center':
            camera.position.set(0, 2, 5);
            break;
    }
    // Asegúrate de que la cámara siempre mire al cubo central
    camera.lookAt(0, 0, 0);
    
    // Actualiza los controles
    controls.target.set(0, 0, 0);
    controls.update();
};

// Agrega event listeners a los botones de control de ejes
const initAxisControls = () => {
    const buttons = document.querySelectorAll('#axis-controls button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const axis = button.getAttribute('data-axis');
            if (axis) {
                moveCameraToAxis(axis);
            }
        });
    });
};

export { initAxisControls };
