import * as THREE from 'three';

const addCubes = (scene: THREE.Scene) => {
    // Añade el primer cubo
    const geometry1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube1 = new THREE.Mesh(geometry1, material1);
    scene.add(cube1);

    // Añade el segundo cubo con dimensiones diferentes
    const geometry2 = new THREE.BoxGeometry(5, 5, 2);
    const material2 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube2 = new THREE.Mesh(geometry2, material2);
    cube2.position.set(4, 2.5, 0);
    scene.add(cube2);
};

export { addCubes };
