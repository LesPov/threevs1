import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { camera } from './camera';
import { renderer } from './renderer';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.maxPolarAngle = Math.PI / 2; // Limita la cámara a no moverse por debajo del plano XY
controls.minPolarAngle = 0;

// Función para limitar el movimiento en el eje Y negativo
controls.addEventListener('change', () => {
    const { x, y, z } = camera.position;
    if (y < 0) {
        camera.position.setY(0); // Limita la posición mínima en el eje Y a 0
    }
});

export { controls };
