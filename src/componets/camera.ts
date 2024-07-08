import * as THREE from 'three';

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(0, 5, 50);

export { camera };
