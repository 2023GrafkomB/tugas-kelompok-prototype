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

const car = new THREE.Group();

const carMainGeometry = new THREE.BoxGeometry(3, 0.8, 1.5);
const carMainMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carMain = new THREE.Mesh(carMainGeometry, carMainMaterial);
carMain.position.y = 0.4;
carMain.castShadow = true;
car.add(carMain);

const carCenterTopGeometry = new THREE.CylinderGeometry(1, 1, 1.3, 3, 1, false, 0, Math.PI);
const carCenterTopMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carCenterTop = new THREE.Mesh(carCenterTopGeometry, carCenterTopMaterial);
carCenterTop.rotateX(Math.PI / 2);
carCenterTop.rotateY(Math.PI / 2);
carCenterTop.position.x = -0.1;
carCenterTop.position.y = 0.5;
carCenterTop.castShadow = true;
car.add(carCenterTop);

const carRearMainLength = 0.1, carRearMainWidth = 0.1;

const carRearMainShape = new THREE.Shape();
carRearMainShape.moveTo(0, 0);
carRearMainShape.lineTo(0, carRearMainWidth);
carRearMainShape.lineTo(carRearMainLength, carRearMainWidth);
carRearMainShape.lineTo(carRearMainLength, 0);
carRearMainShape.lineTo(0, 0);

const carRearMainSettings = {
    steps: 1,
    depth: 1,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 1,
    bevelOffset: 1,
    bevelSegments: 1
};

const carRearMainGeometry = new THREE.ExtrudeGeometry(carRearMainShape, carRearMainSettings);
const carRearMainMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carRearMain = new THREE.Mesh(carRearMainGeometry, carRearMainMaterial);
carRearMain.rotateY(Math.PI / 2);
carRearMain.position.x = -1.2;
carRearMain.position.z = 0.03;
carRearMain.position.y = 0.385;
carRearMain.scale.set(0.35, 0.19, 1);
carRearMain.castShadow = true;
car.add(carRearMain);

const carFrontMainLength = 0.1, carFrontMainWidth = 0.1;

const carFrontMainShape = new THREE.Shape();
carFrontMainShape.moveTo(0, 0);
carFrontMainShape.lineTo(0, carFrontMainWidth);
carFrontMainShape.lineTo(carFrontMainLength, carFrontMainWidth);
carFrontMainShape.lineTo(carFrontMainLength, 0);
carFrontMainShape.lineTo(0, 0);

const carFrontMainSettings = {
    steps: 1,
    depth: 1,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 1,
    bevelOffset: 1,
    bevelSegments: 1
};

const carFrontMainGeometry = new THREE.ExtrudeGeometry(carFrontMainShape, carFrontMainSettings);
const carFrontMainMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carFrontMain = new THREE.Mesh(carFrontMainGeometry, carFrontMainMaterial);
carFrontMain.rotateY(Math.PI / 2);
carFrontMain.position.x = 0.5;
carFrontMain.position.z = 0.03;
carFrontMain.position.y = 0.385;
carFrontMain.scale.set(0.35, 0.19, 1);
carFrontMain
car.add(carFrontMain);

const carRearWheelBarGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.85);
const carRearWheelBarMaterial = new THREE.MeshMatcapMaterial({ color: 0xffffff });
const carRearWheelBar = new THREE.Mesh(carRearWheelBarGeometry, carRearWheelBarMaterial);
carRearWheelBar.rotateX(Math.PI / 2);
carRearWheelBar.position.x = -0.8;
car.add(carRearWheelBar);

const carFrontWheelBarGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.85);
const carFrontWheelBarMaterial = new THREE.MeshMatcapMaterial({ color: 0xffffff });
const carFrontWheelBar = new THREE.Mesh(carFrontWheelBarGeometry, carFrontWheelBarMaterial);
carFrontWheelBar.rotateX(Math.PI / 2);
carFrontWheelBar.position.x = 0.8;
car.add(carFrontWheelBar);

const carRearWheelFenderRightGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const carRearWheelFenderRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carRearWheelFenderRight = new THREE.Mesh(carRearWheelFenderRightGeometry, carRearWheelFenderRightMaterial);
carRearWheelFenderRight.rotateX(Math.PI / 2);
carRearWheelFenderRight.position.x = -0.8;
carRearWheelFenderRight.position.z = 0.7;
carRearWheelFenderRight.castShadow = true;
car.add(carRearWheelFenderRight);

const carRearWheelFenderLeftGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const carRearWheelFenderLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carRearWheelFenderLeft = new THREE.Mesh(carRearWheelFenderLeftGeometry, carRearWheelFenderLeftMaterial);
carRearWheelFenderLeft.rotateX(Math.PI / 2);
carRearWheelFenderLeft.position.x = -0.8;
carRearWheelFenderLeft.position.z = -0.7;
carRearWheelFenderLeft.castShadow = true;
car.add(carRearWheelFenderLeft);

const carFrontWheelFenderRightGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const carFrontWheelFenderRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carFrontWheelFenderRight = new THREE.Mesh(carFrontWheelFenderRightGeometry, carFrontWheelFenderRightMaterial);
carFrontWheelFenderRight.rotateX(Math.PI / 2);
carFrontWheelFenderRight.position.x = 0.8;
carFrontWheelFenderRight.position.z = 0.7;
carFrontWheelFenderRight.castShadow = true;
car.add(carFrontWheelFenderRight);

const carFrontWheelFenderLeftGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const carFrontWheelFenderLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carFrontWheelFenderLeft = new THREE.Mesh(carFrontWheelFenderLeftGeometry, carFrontWheelFenderLeftMaterial);
carFrontWheelFenderLeft.rotateX(Math.PI / 2);
carFrontWheelFenderLeft.position.x = 0.8;
carFrontWheelFenderLeft.position.z = -0.7;
carFrontWheelFenderLeft.castShadow = true;
car.add(carFrontWheelFenderLeft);

const carRearWheelRightGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.4);
const carRearWheelRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const carRearWheelRight = new THREE.Mesh(carRearWheelRightGeometry, carRearWheelRightMaterial);
carRearWheelRight.rotateX(Math.PI / 2);
carRearWheelRight.position.x = -0.8;
carRearWheelRight.position.z = 0.7;
carRearWheelRight.castShadow = true;
car.add(carRearWheelRight);

const carRearWheelLeftGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.4);
const carRearWheelLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const carRearWheelLeft = new THREE.Mesh(carRearWheelLeftGeometry, carRearWheelLeftMaterial);
carRearWheelLeft.rotateX(Math.PI / 2);
carRearWheelLeft.position.x = -0.8;
carRearWheelLeft.position.z = -0.7;
carRearWheelLeft.castShadow = true;
car.add(carRearWheelLeft);

const carFrontWheelRightGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.3);
const carFrontWheelRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const carFrontWheelRight = new THREE.Mesh(carFrontWheelRightGeometry, carFrontWheelRightMaterial);
carFrontWheelRight.rotateX(Math.PI / 2);
carFrontWheelRight.position.x = 0.8;
carFrontWheelRight.position.z = 0.75;
carFrontWheelRight.castShadow = true;
car.add(carFrontWheelRight);

const carFrontWheelLeftGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.3);
const carFrontWheelLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const carFrontWheelLeft = new THREE.Mesh(carFrontWheelLeftGeometry, carFrontWheelLeftMaterial);
carFrontWheelLeft.rotateX(Math.PI / 2);
carFrontWheelLeft.position.x = 0.8;
carFrontWheelLeft.position.z = -0.75;
carFrontWheelLeft.castShadow = true;
car.add(carFrontWheelLeft);

car.rotateY(Math.PI/2); 

scene.add(car);

// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00FF00 });
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);
// box.castShadow = true;
// box.position.set(0, 0.5, 0);

//create sun like lighting from the top
const sunLight = new THREE.DirectionalLight(0xFFD700, 6.5); 
sunLight.position.set(100, 45, 25);
sunLight.castShadow = true;
// Adjust shadow camera properties
sunLight.shadow.mapSize.width = 1024;
sunLight.shadow.mapSize.height = 1024;
// Configure the shadow camera's position, target, and other properties
const shadowCamera = sunLight.shadow.camera;
const sceneSize = 780;
shadowCamera.left = -sceneSize / 2;
shadowCamera.right = sceneSize / 2;
shadowCamera.top = sceneSize / 2;
shadowCamera.bottom = -sceneSize / 2;
shadowCamera.near = 0.1;
shadowCamera.far = 500; // Extend the far value as needed
scene.add(sunLight);


scene.fog = new THREE.Fog(0xC0C0C0, 0, 250);

//world
const planeGeometry = new THREE.PlaneGeometry(200, 1050);
const groundtextureLoader = new THREE.TextureLoader();
const groundTexture = groundtextureLoader.load("images/grass.jpg");
const planeMaterial = new THREE.MeshPhysicalMaterial({
  map: groundTexture,
  color: 0x2AAA8A,
  side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;


// Road config
const RoadGeometry = new THREE.PlaneGeometry(10, 1050);
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
const barrierRightGeo =  new THREE.BoxGeometry(0.5, 1, 950);
const barrierMaterial = new THREE.MeshStandardMaterial({
    color: 0xff0000
});
const barrierRight = new THREE.Mesh(barrierRightGeo, barrierMaterial);
const barrierLeft = new THREE.Mesh(barrierRightGeo, barrierMaterial);
scene.add(barrierRight);
scene.add(barrierLeft);
barrierRight.position.x = 5.120;
barrierLeft.position.x = -5.120;

//roadmark
const whiteMarkGeo = new THREE.BoxGeometry(0.25, 0.25, 950);
const roadmarkMats = new THREE.MeshStandardMaterial({
  color: 0xffffff
});
const whiteLeft = new THREE.Mesh(whiteMarkGeo, roadmarkMats);
const whiteRight = new THREE.Mesh(whiteMarkGeo, roadmarkMats);
scene.add(whiteLeft);
scene.add(whiteRight);
whiteLeft.position.set(4.620, 0, 0);
whiteRight.position.set(-4.620, 0, 0);

//leftBuilding
const leftBuildingGeo = new THREE.BoxGeometry(10, 15, 1050);
const buildingmats = new THREE.MeshStandardMaterial({
  color: 0x000000
});
const leftBuilding = new THREE.Mesh(leftBuildingGeo, buildingmats);
const RightBuilding = new THREE.Mesh(leftBuildingGeo, buildingmats);
scene.add(leftBuilding);
scene.add(RightBuilding);
leftBuilding.position.x = -18.120;
RightBuilding.position.x = 18.120;


const CreateStreetLight = (posX, posY, posZ) => {
  var poleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3, 32);
  var poleMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
  var pole = new THREE.Mesh(poleGeometry, poleMaterial);
  pole.castShadow = true;

  // Create a light bulb
  var bulbGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  var bulbMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFF00 });
  var bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
  bulb.castShadow = true;

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
    trunk.castShadow = true;
    

    // Create the foliage (green part of the tree)
    const foliageGeometry = new THREE.ConeGeometry(1, 3, 8);
    const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
    const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
    foliage.castShadow = true;


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
  pole.castShadow = true;

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
    car.position.z = 285;
  }
}

const maxDistance = 315;

const moveDistance = 2.75; // Adjust the movement speed
const moveDistanceTurn = 1.75; // Adjust the movement speed
//const headlightDampingFactor = 0.05;
const animate = () => {
   
  car.position.z -= moveDistance;
  if (keyStates.s) {
    car.position.z += 0;
  }
  if (keyStates.a) {
    if(car.position.x <= barrierLeft.position.x + 0.75){
      car.position.x = barrierLeft.position.x + 0.75;
    }

    else{
      car.position.x -= moveDistanceTurn;
    }
  }
  if (keyStates.d) {

    if(car.position.x >= barrierRight.position.x - 0.75){
      car.position.x = barrierRight.position.x - 0.75;
    }

    else{
      car.position.x += moveDistanceTurn;
    }
  } 

  // Set the camera position to follow the box
  camera.position.copy(car.position).add(new THREE.Vector3(0.1, 1.75, 3)); 
  // const targetHeadlightPosition = box.position.clone().add(new THREE.Vector3(0, 0.5, 1));
  // headlight.position.lerp(targetHeadlightPosition, headlightDampingFactor);

  camera.lookAt(car.position);
  renderer.render(scene, camera);

  wrapCar(car, maxDistance);
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
