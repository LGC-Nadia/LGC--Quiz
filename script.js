// Importar bibliotecas necessárias
const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);

// Configurar cena e câmera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Configurar renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criar cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Adicionar controles de órbita
const controls = new OrbitControls(camera, renderer.domElement);

// Função para girar o cubo quando arrastado
let mouseDown = false;
let lastMouseX = 0;
let lastMouseY = 0;

function onMouseMove(event) {
  if (mouseDown) {
    const deltaX = event.clientX - lastMouseX;
    const deltaY = event.clientY - lastMouseY;

    cube.rotation.x += deltaY * 0.01;
    cube.rotation.y += deltaX * 0.01;

    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
  }
}

// Adicionar evento de mouse para baixo
renderer.domElement.addEventListener('mousedown', (event) => {
  mouseDown = true;
  lastMouseX = event.clientX;
  lastMouseY = event.clientY;
});

// Adicionar evento de mouse para cima
renderer.domElement.addEventListener('mouseup', () => {
  mouseDown = false;
});

// Função de animação
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}

animate();
