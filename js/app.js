import { Factory } from "/js/factory.js";
// import { GridF } from "/js/gridWithFaces.js"; // grid made with geometry
import { GridF } from "/js/gridFaces.js"; // grid made with buffergeometry

// Create your scene
const scene = new THREE.Scene();

var factory = new Factory(0, 7, 10, 5);

initialize();
animate();

var gg;
function initialize() {
  var grid = new GridF(3, 4, 6, 8, "red", scene);
  gg = grid.drawGrid();
}

function animate() {
  requestAnimationFrame(animate);
  gg.rotation.y += 0.002;
  factory.renderScene(scene);
}
