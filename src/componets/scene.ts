import * as THREE from 'three';

const scene = new THREE.Scene();

// Materiales para los ejes con desplazamiento para evitar Z-fighting
const materialX = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
const materialY = new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 2, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
const materialZ = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 2, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });

// Función para crear un eje
const createAxis = (points: THREE.Vector3[], material: THREE.LineBasicMaterial) => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return new THREE.Line(geometry, material);
};

// Crear y añadir ejes positivos
const xAxis = createAxis([new THREE.Vector3(0, 0, 0), new THREE.Vector3(5, 0, 0)], materialX);
const yAxis = createAxis([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 5, 0)], materialY);
const zAxis = createAxis([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 5)], materialZ);
scene.add(xAxis);
scene.add(yAxis);
scene.add(zAxis);

// Añadir líneas adicionales para resaltar los ejes negativos
const addNegativeAxes = () => {
    // Línea para el eje negativo X
    const negXAxis = createAxis([new THREE.Vector3(-5, 0, 0), new THREE.Vector3(0, 0, 0)], materialX);
    scene.add(negXAxis);

    // Línea para el eje negativo Z
    const negZAxis = createAxis([new THREE.Vector3(0, 0, -5), new THREE.Vector3(0, 0, 0)], materialZ);
    scene.add(negZAxis);
};

addNegativeAxes();

export { scene };
