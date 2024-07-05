import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { camera } from './camera';
import { renderer } from './renderer';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;

export { controls };
