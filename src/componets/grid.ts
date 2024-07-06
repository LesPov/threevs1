import * as THREE from 'three';

const addGrid = (scene: THREE.Scene) => {
    const size = 20; // Tamaño de la cuadrícula
    const divisions = 20; // Número de divisiones en la cuadrícula

    const gridHelper = new THREE.GridHelper(size, divisions, 0x444444, 0x888888);
    gridHelper.material.opacity = 0.5;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);
};

export { addGrid };
