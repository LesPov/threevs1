import * as THREE from 'three';

const scene = new THREE.Scene();

// Helper para los ejes
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Añadir líneas adicionales para resaltar los ejes negativos
const addNegativeAxes = () => {
    // Material para el eje negativo X (rojo)
    const materialX = new THREE.LineBasicMaterial({ color: 0xfb4901 });
    // Material para el eje negativo Y (verde)
    const materialY = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    // Material para el eje negativo Z (azul)
    const materialZ = new THREE.LineBasicMaterial({ color: 0x0000ff });

    // Línea para el eje negativo X
    const pointsX = [];
    pointsX.push(new THREE.Vector3(-5, 0, 0));
    pointsX.push(new THREE.Vector3(0, 0, 0));
    const geometryX = new THREE.BufferGeometry().setFromPoints(pointsX);
    const lineX = new THREE.Line(geometryX, materialX);
    scene.add(lineX);

    // Línea para el eje negativo Y
    const pointsY = [];
    pointsY.push(new THREE.Vector3(0, -5, 0));
    pointsY.push(new THREE.Vector3(0, 0, 0));
    const geometryY = new THREE.BufferGeometry().setFromPoints(pointsY);
    const lineY = new THREE.Line(geometryY, materialY);
    scene.add(lineY);

    // Línea para el eje negativo Z
    const pointsZ = [];
    pointsZ.push(new THREE.Vector3(0, 0, -5));
    pointsZ.push(new THREE.Vector3(0, 0, 0));
    const geometryZ = new THREE.BufferGeometry().setFromPoints(pointsZ);
    const lineZ = new THREE.Line(geometryZ, materialZ);
    scene.add(lineZ);
};

addNegativeAxes();

export { scene };
