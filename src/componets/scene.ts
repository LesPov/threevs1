import * as THREE from 'three';

const scene = new THREE.Scene();

// Helper para los ejes
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

export { scene };
