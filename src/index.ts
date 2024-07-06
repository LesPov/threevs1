import { scene } from './componets/scene';
 import { controls } from './componets/controls';
 import { animate } from './componets/animation';
 import { addCubes } from './componets/cube';
import { addGrid } from './componets/grid';
import { initAxisControls } from './componets/axisControls';

// Configuración de la escena y otros elementos
addGrid(scene);
addCubes(scene);
controls.update();
initAxisControls();
animate(); 