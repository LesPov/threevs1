import * as THREE from 'three';

const addGrid = (scene: THREE.Scene) => {
    const size = 20; // Tamaño de la cuadrícula
    const divisions = 20; // Número de divisiones en la cuadrícula

    // Cuadrícula horizontal
    const gridHelper = new THREE.GridHelper(size, divisions, 0x444444);
    
    scene.add(gridHelper);

    // Cuadrícula vertical (XZ plane)
    const verticalGridHelperXZ = new THREE.GridHelper(size, divisions, 0x444444);
    verticalGridHelperXZ.material.opacity = 0.5;
    verticalGridHelperXZ.material.transparent = true;
    verticalGridHelperXZ.position.set(0,10,0);
    verticalGridHelperXZ.rotation.x = Math.PI / 2;
    scene.add(verticalGridHelperXZ);

    // Cuadrícula vertical (YZ plane)
    const verticalGridHelperYZ = new THREE.GridHelper(size, divisions, 0x444444);
    verticalGridHelperYZ.material.opacity = 0.5;
    verticalGridHelperYZ.material.transparent = true;
    verticalGridHelperYZ.position.set(0,10,0);
    verticalGridHelperYZ.rotation.z = Math.PI / 2;
    scene.add(verticalGridHelperYZ);
};

export { addGrid };
