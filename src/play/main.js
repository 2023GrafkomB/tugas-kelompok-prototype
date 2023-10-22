import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const orbit = new OrbitControls(camera, renderer.domElement);

// Initial camera position
camera.position.set(0.1, 1.75, 3.8);
orbit.update();

const axisHelper = new THREE.AxesHelper(5);
scene.add(axisHelper);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);
box.position.set(0, 0.5, 0);

const planeGeometry = new THREE.PlaneGeometry(1080, 1080);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0xEDC9AF,
  side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

// Road config
const RoadGeometry = new THREE.PlaneGeometry(10, 1080);
const RoadMaterial = new THREE.MeshStandardMaterial({
  color: 0x000000,
  side: THREE.DoubleSide
});
const road = new THREE.Mesh(RoadGeometry, RoadMaterial);
scene.add(road);
road.position.y += 0.1;
road.rotation.x = -0.5 * Math.PI;

//barrier
const barrierRightGeo =  new THREE.BoxGeometry(0.5, 1, 1080);
const barrierMaterial = new THREE.MeshStandardMaterial({
    color: 0xff0000
});
const barrierRight = new THREE.Mesh(barrierRightGeo, barrierMaterial);
const barrierLeft = new THREE.Mesh(barrierRightGeo, barrierMaterial);
scene.add(barrierRight);
scene.add(barrierLeft);
barrierRight.position.x = 5.120;
barrierLeft.position.x = -5.120;




const light = new THREE.DirectionalLight(0xFFFFFF, 0.88);
scene.add(light);

const moveDistance = 0.25; // Adjust the movement speed

const animate = () => {
  // WASD movement for the box
  if (keyStates.w) {
    box.position.z -= moveDistance;
  }
  if (keyStates.s) {
    box.position.z += moveDistance;
  }
  if (keyStates.a) {
    box.position.x -= moveDistance;
  }
  if (keyStates.d) {
    box.position.x += moveDistance;
  }

  // Set the camera position to follow the box
  camera.position.copy(box.position).add(new THREE.Vector3(0.1, 1.75, 5)); // Adjust the camera offset

  camera.lookAt(box.position);

  renderer.render(scene, camera);
};

const keyStates = {
  w: false,
  a: false,
  s: false,
  d: false,
};

document.addEventListener('keydown', (event) => {
  if (event.key in keyStates) {
    keyStates[event.key] = true;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key in keyStates) {
    keyStates[event.key] = false;
  }
});

renderer.setAnimationLoop(animate);
