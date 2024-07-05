import * as THREE from 'three';

const addGrid = (scene: THREE.Scene) => {
    const size = 10; // Tamaño de la cuadrícula
    const divisions = 10; // Número de divisiones en la cuadrícula

    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);
};

export { addGrid };
