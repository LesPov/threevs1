import { scene } from './componets/scene';
import { camera } from './componets/camera';
 import { renderer } from './componets/renderer';
 import { controls } from './componets/controls';
 import { animate } from './componets/animation';
 import { addCubes } from './componets/cube';

// Configuración de la escena y otros elementos
 addCubes(scene);
 controls.update();
 animate();
