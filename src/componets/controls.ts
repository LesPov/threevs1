import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { camera } from './camera';
import { renderer } from './renderer';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
// Configura los límites del movimiento de la cámara
controls.maxPolarAngle = Math.PI / 2; // Limita la cámara a no moverse por debajo del plano XY

controls.update();

export { controls };
