import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
const orbit = new OrbitControls(camera, renderer.domElement);

const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
  'images/left.jpg',
  'images/right.jpg',
  'images/back.jpg',
  'images/bottom.jpg',
  'images/top.jpg',
  'images/front.jpg'
]);

// Set the format and mapping to properly render the skybox
scene.background = texture;


// Initial camera position
camera.position.set(0.1, 1.75, 3.8);
orbit.update();

const axisHelper = new THREE.AxesHelper(5);
scene.add(axisHelper);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00FF00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);
box.position.set(0, 0.5, 0);

//create sun like lighting from the top
const sunLight = new THREE.DirectionalLight(0xFFD700, 7.5); 
sunLight.position.set(100, 45, 0); 
sunLight.castShadow = true; 
scene.add(sunLight);

scene.fog = new THREE.Fog(0xC0C0C0, 0, 250);

//world
const planeGeometry = new THREE.PlaneGeometry(1080, 1080);
const planeMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x2AAA8A,
  side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;


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
road.receiveShadow = true;

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

const CreateStreetLight = (posX, posY, posZ) => {
  var poleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3, 32);
  var poleMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
  var pole = new THREE.Mesh(poleGeometry, poleMaterial);

  // Create a light bulb
  var bulbGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  var bulbMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFF00 });
  var bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);

  bulb.position.set(posX, posY+1, posZ);
  pole.position.set(posX, posY, posZ);

  scene.add(pole);
  scene.add(bulb);
};

const CreateTree = (posX, posY, posZ) => {
  // Create a simple trunk
    const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 8);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    

    // Create the foliage (green part of the tree)
    const foliageGeometry = new THREE.ConeGeometry(1, 3, 8);
    const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
    const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);

    trunk.position.set(posX, posY, posZ);
    foliage.position.set(posX, posY+2, posZ);

    scene.add(trunk);
    scene.add(foliage);
}


const CreateTube = (posX, posY, posZ) => {
  var poleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32);
  var poleMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
  var pole = new THREE.Mesh(poleGeometry, poleMaterial);
  pole.position.set(posX, posY, posZ);

  scene.add(pole);
};

let xstartLamp = 5, ystartLamp = 2, zstartLamp = 0;
let xstartTube = 5, ystartTube = 0, zstartTube = 15;
let xstartTree = 10, ystartTree = 0, zstartTree = -2, zbackTree=2;
let gaplamp = 50;
let gaptube = 5;
let gaptree = 15;

for(let i = 0; i< 100; i++){
  if(i<5){
    CreateStreetLight(xstartLamp, ystartLamp, zstartLamp);
    CreateStreetLight(-xstartLamp, ystartLamp, zstartLamp);
  }


  if(i<20){
    CreateTree(xstartTree, ystartTree, zstartTree);
    CreateTree(-xstartTree, ystartTree, zstartTree);

    
    CreateTube(xstartTube, ystartTube, zstartTube+2);
    CreateTube(-xstartTube, ystartTube, zstartTube+2);
  }

  if(i<12){
    CreateTree(xstartTree, ystartTree, zbackTree);
    CreateTree(-xstartTree, ystartTree, zbackTree);
  }

  zstartTube-=gaptube;
  zstartLamp-=gaplamp;
  zstartTree-=gaptree;
  zbackTree+=gaptree;
}

function wrapCar(car, maxDistance) {
  // Define the distance at which the car "wraps" to the other set of lights
  if (car.position.z < -maxDistance) {
    car.position.z = 150
  }
}

const maxDistance = 315;

const moveDistance = 2.75; // Adjust the movement speed
const moveDistanceTurn = 1.75; // Adjust the movement speed
//const headlightDampingFactor = 0.05;
const animate = () => {
  // WASD movement for the box
   //box.position.z -= moveDistance;
   

  if (keyStates.w) {
    box.position.z -= moveDistance;
  }
  if (keyStates.s) {
    box.position.z += moveDistance;
  }
  if (keyStates.a) {
    if(box.position.x <= barrierLeft.position.x + 0.75){
      box.position.x = barrierLeft.position.x + 0.75;
    }

    else{
      box.position.x -= moveDistanceTurn;
    }
  }
  if (keyStates.d) {

    if(box.position.x >= barrierRight.position.x - 0.75){
      box.position.x = barrierRight.position.x - 0.75;
    }

    else{
      box.position.x += moveDistanceTurn;
    }
  } 

  // Set the camera position to follow the box
  camera.position.copy(box.position).add(new THREE.Vector3(0.1, 1.75, 3)); 
  // const targetHeadlightPosition = box.position.clone().add(new THREE.Vector3(0, 0.5, 1));
  // headlight.position.lerp(targetHeadlightPosition, headlightDampingFactor);

  camera.lookAt(box.position);

  wrapCar(box, maxDistance);
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
