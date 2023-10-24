// Imports
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'dat.gui'

// Basic threejs setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 7;
camera.position.y = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement);

// Car object
const car = new THREE.Group();

const carMainGeometry = new THREE.BoxGeometry(3, 0.8, 1.5);
const carMainMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carMain = new THREE.Mesh(carMainGeometry, carMainMaterial);
carMain.name = "Selecting car's main";
carMain.position.y = 0.4;
carMain.castShadow = true;
car.add(carMain);

const carCenterTopGeometry = new THREE.CylinderGeometry(1, 1, 1.3, 3, 1, false, 0, Math.PI);
const carCenterTopMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carCenterTop = new THREE.Mesh(carCenterTopGeometry, carCenterTopMaterial);
carCenterTop.name = "Selecting car's top main";
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
carRearMain.name = "Selecting car's rear bumber";
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
carFrontMain.name = "Selecting car's front bumber";
carFrontMain.rotateY(Math.PI / 2);
carFrontMain.position.x = 0.5;
carFrontMain.position.z = 0.03;
carFrontMain.position.y = 0.385;
carFrontMain.scale.set(0.35, 0.19, 1);
carFrontMain
car.add(carFrontMain);

const carRearWheelBarGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.85);
const carRearWheelBarMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carRearWheelBar = new THREE.Mesh(carRearWheelBarGeometry, carRearWheelBarMaterial);
carRearWheelBar.name = "Selecting car's rear wheel bar";
carRearWheelBar.rotateX(Math.PI / 2);
carRearWheelBar.position.x = -0.8;
car.add(carRearWheelBar);

const carFrontWheelBarGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.85);
const carFrontWheelBarMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carFrontWheelBar = new THREE.Mesh(carFrontWheelBarGeometry, carFrontWheelBarMaterial);
carFrontWheelBar.name = "Selecting car's front wheel bar";
carFrontWheelBar.rotateX(Math.PI / 2);
carFrontWheelBar.position.x = 0.8;
car.add(carFrontWheelBar);

const carRearWheelFenderRightGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const carRearWheelFenderRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carRearWheelFenderRight = new THREE.Mesh(carRearWheelFenderRightGeometry, carRearWheelFenderRightMaterial);
carRearWheelFenderRight.name = "Selecting car's rear wheel right fender";
carRearWheelFenderRight.rotateX(Math.PI / 2);
carRearWheelFenderRight.position.x = -0.8;
carRearWheelFenderRight.position.z = 0.7;
carRearWheelFenderRight.castShadow = true;
car.add(carRearWheelFenderRight);

const carRearWheelFenderLeftGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const carRearWheelFenderLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carRearWheelFenderLeft = new THREE.Mesh(carRearWheelFenderLeftGeometry, carRearWheelFenderLeftMaterial);
carRearWheelFenderLeft.name = "Selecting car's rear wheel left fender";
carRearWheelFenderLeft.rotateX(Math.PI / 2);
carRearWheelFenderLeft.position.x = -0.8;
carRearWheelFenderLeft.position.z = -0.7;
carRearWheelFenderLeft.castShadow = true;
car.add(carRearWheelFenderLeft);

const carFrontWheelFenderRightGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const carFrontWheelFenderRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carFrontWheelFenderRight = new THREE.Mesh(carFrontWheelFenderRightGeometry, carFrontWheelFenderRightMaterial);
carFrontWheelFenderRight.name = "Selecting car's front wheel right fender";
carFrontWheelFenderRight.rotateX(Math.PI / 2);
carFrontWheelFenderRight.position.x = 0.8;
carFrontWheelFenderRight.position.z = 0.7;
carFrontWheelFenderRight.castShadow = true;
car.add(carFrontWheelFenderRight);

const carFrontWheelFenderLeftGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const carFrontWheelFenderLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const carFrontWheelFenderLeft = new THREE.Mesh(carFrontWheelFenderLeftGeometry, carFrontWheelFenderLeftMaterial);
carFrontWheelFenderLeft.name = "Selecting car's front wheel left fender";
carFrontWheelFenderLeft.rotateX(Math.PI / 2);
carFrontWheelFenderLeft.position.x = 0.8;
carFrontWheelFenderLeft.position.z = -0.7;
carFrontWheelFenderLeft.castShadow = true;
car.add(carFrontWheelFenderLeft);

const carRearWheelRightGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.4);
const carRearWheelRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const carRearWheelRight = new THREE.Mesh(carRearWheelRightGeometry, carRearWheelRightMaterial);
carRearWheelRight.name = "Selecting car's rear wheel right";
carRearWheelRight.rotateX(Math.PI / 2);
carRearWheelRight.position.x = -0.8;
carRearWheelRight.position.z = 0.7;
carRearWheelRight.castShadow = true;
car.add(carRearWheelRight);

const carRearWheelLeftGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.4);
const carRearWheelLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const carRearWheelLeft = new THREE.Mesh(carRearWheelLeftGeometry, carRearWheelLeftMaterial);
carRearWheelLeft.name = "Selecting car's rear wheel left";
carRearWheelLeft.rotateX(Math.PI / 2);
carRearWheelLeft.position.x = -0.8;
carRearWheelLeft.position.z = -0.7;
carRearWheelLeft.castShadow = true;
car.add(carRearWheelLeft);

const carFrontWheelRightGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.3);
const carFrontWheelRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const carFrontWheelRight = new THREE.Mesh(carFrontWheelRightGeometry, carFrontWheelRightMaterial);
carFrontWheelRight.name = "Selecting car's front wheel right";
carFrontWheelRight.rotateX(Math.PI / 2);
carFrontWheelRight.position.x = 0.8;
carFrontWheelRight.position.z = 0.75;
carFrontWheelRight.castShadow = true;
car.add(carFrontWheelRight);

const carFrontWheelLeftGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.3);
const carFrontWheelLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const carFrontWheelLeft = new THREE.Mesh(carFrontWheelLeftGeometry, carFrontWheelLeftMaterial);
carFrontWheelLeft.name = "Selecting car's front wheel left";
carFrontWheelLeft.rotateX(Math.PI / 2);
carFrontWheelLeft.position.x = 0.8;
carFrontWheelLeft.position.z = -0.75;
carFrontWheelLeft.castShadow = true;
car.add(carFrontWheelLeft);

// Car platform
const carPlatformGeometry = new THREE.CylinderGeometry(3.7, 4, 0.5, 256);
const carPlatformMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff });
const carPlatform = new THREE.Mesh(carPlatformGeometry, carPlatformMaterial);
carPlatform.receiveShadow = true;
carPlatform.position.set(0, -0.545, 0);

// Truck object
const truck = new THREE.Group();

const truckMainGeometry = new THREE.BoxGeometry(5, 0.8, 1.5);
const truckMainMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const truckMain = new THREE.Mesh(truckMainGeometry, truckMainMaterial);
truckMain.name = "Selecting truck's main";
truckMain.position.y = 0.4;
truckMain.castShadow = true;
truck.add(truckMain);

const truckCenterTopGeomtery = new THREE.CylinderGeometry(1, 1, 1.3, 3, 1, false, 0, Math.PI);
const truckCenterTopMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const truckCenterTop = new THREE.Mesh(truckCenterTopGeomtery, truckCenterTopMaterial);
truckCenterTop.name = "Selecting truck's center top";
truckCenterTop.rotateX(Math.PI / 2);
truckCenterTop.rotateY(Math.PI / 2);
truckCenterTop.position.x = 1.4;
truckCenterTop.position.y = 0.8;
truckCenterTop.castShadow = true;
truck.add(truckCenterTop);

const truckFrontMainLength = 0.1, truckFrontMainWidth = 0.1;

const truckFrontMainShape = new THREE.Shape();
truckFrontMainShape.moveTo(0, 0);
truckFrontMainShape.lineTo(0, truckFrontMainWidth);
truckFrontMainShape.lineTo(truckFrontMainLength, truckFrontMainWidth);
truckFrontMainShape.lineTo(truckFrontMainLength, 0);
truckFrontMainShape.lineTo(0, 0);

const truckFrontMainSettings = {
    steps: 1,
    depth: 1,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 1,
    bevelOffset: 1,
    bevelSegments: 1
};

const truckFrontMainGeometry = new THREE.ExtrudeGeometry(truckFrontMainShape, truckFrontMainSettings);
const truckFrontMainMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const truckFrontMain = new THREE.Mesh(truckFrontMainGeometry, truckFrontMainMaterial);
truckFrontMain.name = "Selecting truck's front bumber";
truckFrontMain.rotateY(Math.PI / 2);
truckFrontMain.position.x = 1.04;
truckFrontMain.position.z = 0.008;
truckFrontMain.position.y = 0.38;
truckFrontMain.scale.set(0.35, 0.19, 1);
truckFrontMain.castShadow = true;
truck.add(truckFrontMain);

const truckRearWheel1BarGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.85);
const truckRearWheel1BarMaterial = new THREE.MeshMatcapMaterial({ color: 0xffffff });
const truckRearWheel1Bar = new THREE.Mesh(truckRearWheel1BarGeometry, truckRearWheel1BarMaterial);
truckRearWheel1Bar.rotateX(Math.PI / 2);
truckRearWheel1Bar.position.x = -1.8;
truck.add(truckRearWheel1Bar);

const truckRearWheel2BarGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.85);
const truckRearWheel2BarMaterial = new THREE.MeshMatcapMaterial({ color: 0xffffff });
const trucRrearWheel2Bar = new THREE.Mesh(truckRearWheel2BarGeometry, truckRearWheel2BarMaterial);
trucRrearWheel2Bar.rotateX(Math.PI / 2);
trucRrearWheel2Bar.position.x = -0.9;
truck.add(trucRrearWheel2Bar);

const truckFrontWheelBarGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.85);
const truckFrontWheelBarMaterial = new THREE.MeshMatcapMaterial({ color: 0xffffff });
const truckFrontWheelBar = new THREE.Mesh(truckFrontWheelBarGeometry, truckFrontWheelBarMaterial);
truckFrontWheelBar.rotateX(Math.PI / 2);
truckFrontWheelBar.position.x = 1.2;
truck.add(truckFrontWheelBar);


const truckRearWheel1FenderRightGeometry = new THREE.CylinderGeometry(0.45, 0.45, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const truckRearWheel1FenderRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const truckRearWheel1FenderRight = new THREE.Mesh(truckRearWheel1FenderRightGeometry, truckRearWheel1FenderRightMaterial);
truckRearWheel1FenderRight.name = "Selecting truck's rear wheel right fender 1";
truckRearWheel1FenderRight.rotateX(Math.PI / 2);
truckRearWheel1FenderRight.position.x = -1.8;
truckRearWheel1FenderRight.position.z = 0.7;
truckRearWheel1FenderRight.castShadow = true;
truck.add(truckRearWheel1FenderRight);

const truckRearWheel1FenderLeftGeometry = new THREE.CylinderGeometry(0.45, 0.45, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const truckRearWheel1FenderLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const truckRearWheel1FenderLeft = new THREE.Mesh(truckRearWheel1FenderLeftGeometry, truckRearWheel1FenderLeftMaterial);
truckRearWheel1FenderLeft.name = "Selecting truck's rear wheel left fender 1";
truckRearWheel1FenderLeft.rotateX(Math.PI / 2);
truckRearWheel1FenderLeft.position.x = -1.8;
truckRearWheel1FenderLeft.position.z = -0.7;
truckRearWheel1FenderLeft.castShadow = true;
truck.add(truckRearWheel1FenderLeft);

const truckRearWheel2FenderRightGeometry = new THREE.CylinderGeometry(0.45, 0.45, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const truckRearWheel2FenderRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const truckRearWheel2FenderRight = new THREE.Mesh(truckRearWheel2FenderRightGeometry, truckRearWheel2FenderRightMaterial);
truckRearWheel2FenderRight.name = "Selecting truck's rear wheel right fender 2";
truckRearWheel2FenderRight.rotateX(Math.PI / 2);
truckRearWheel2FenderRight.position.x = -0.9;
truckRearWheel2FenderRight.position.z = 0.7;
truckRearWheel2FenderRight.castShadow = true;
truck.add(truckRearWheel2FenderRight);

const truckRearWheel2FenderLeftGeometry = new THREE.CylinderGeometry(0.45, 0.45, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const truckRearWheel2FenderLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const truckRearWheel2FenderLeft = new THREE.Mesh(truckRearWheel2FenderLeftGeometry, truckRearWheel2FenderLeftMaterial);
truckRearWheel2FenderLeft.name = "Selecting truck's rear wheel left fender 2";
truckRearWheel2FenderLeft.rotateX(Math.PI / 2);
truckRearWheel2FenderLeft.position.x = -0.9;
truckRearWheel2FenderLeft.position.z = -0.7;
truckRearWheel2FenderLeft.castShadow = true;
truck.add(truckRearWheel2FenderLeft);

const truckFrontWheelFenderRightGeometry = new THREE.CylinderGeometry(0.45, 0.45, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const truckFrontWheelFenderRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const truckFrontWheelFenderRight = new THREE.Mesh(truckFrontWheelFenderRightGeometry, truckFrontWheelFenderRightMaterial);
truckFrontWheelFenderRight.name = "Selecting truck's front wheel right fender";
truckFrontWheelFenderRight.rotateX(Math.PI / 2);
truckFrontWheelFenderRight.position.x = 1.2;
truckFrontWheelFenderRight.position.z = 0.7;
truckFrontWheelFenderRight.castShadow = true;
truck.add(truckFrontWheelFenderRight);

const truckFrontWheelFenderLeftGeometry = new THREE.CylinderGeometry(0.45, 0.45, 0.4, 32, 1, true, Math.PI / 2, Math.PI);
const truckFrontWheelFenderLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const truckFrontWheelFenderLeft = new THREE.Mesh(truckFrontWheelFenderLeftGeometry, truckFrontWheelFenderLeftMaterial);
truckFrontWheelFenderLeft.name = "Selecting truck's front wheel left fender";
truckFrontWheelFenderLeft.rotateX(Math.PI / 2);
truckFrontWheelFenderLeft.position.x = 1.2;
truckFrontWheelFenderLeft.position.z = -0.7;
truckFrontWheelFenderLeft.castShadow = true;
truck.add(truckFrontWheelFenderLeft);


const truckRearWheel1RightGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3);
const truckRearWheel1RightMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const truckRearWheel1Right = new THREE.Mesh(truckRearWheel1RightGeometry, truckRearWheel1RightMaterial);
truckRearWheel1Right.name = "Selecting truck's rear wheel right 1";
truckRearWheel1Right.rotateX(Math.PI / 2);
truckRearWheel1Right.position.x = -1.8;
truckRearWheel1Right.position.z = 0.75;
truckRearWheel1Right.castShadow = true;
truck.add(truckRearWheel1Right);

const truckRearWheel1LeftGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3);
const truckRearWheel1LeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const truckRearWheel1Left = new THREE.Mesh(truckRearWheel1LeftGeometry, truckRearWheel1LeftMaterial);
truckRearWheel1Left.name = "Selecting truck's rear wheel left 1";
truckRearWheel1Left.rotateX(Math.PI / 2);
truckRearWheel1Left.position.x = -1.8;
truckRearWheel1Left.position.z = -0.75;
truckRearWheel1Left.castShadow = true;
truck.add(truckRearWheel1Left);

const truckRearWheel2RightGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3);
const truckRearWheel2RightMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const truckRearWheel2Right = new THREE.Mesh(truckRearWheel2RightGeometry, truckRearWheel2RightMaterial);
truckRearWheel2Right.name = "Selecting truck's rear wheel right 2";
truckRearWheel2Right.rotateX(Math.PI / 2);
truckRearWheel2Right.position.x = -0.9;
truckRearWheel2Right.position.z = 0.75;
truckRearWheel2Right.castShadow = true;
truck.add(truckRearWheel2Right);

const truckRearWheel2LeftGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3);
const truckRearWheel2LeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const truckRearWheel2Left = new THREE.Mesh(truckRearWheel2LeftGeometry, truckRearWheel2LeftMaterial);
truckRearWheel2Left.name = "Selecting truck's rear wheel left 2";
truckRearWheel2Left.rotateX(Math.PI / 2);
truckRearWheel2Left.position.x = -0.9;
truckRearWheel2Left.position.z = -0.75;
truckRearWheel2Left.castShadow = true;
truck.add(truckRearWheel2Left);

const truckFrontWheelRightGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3);
const truckFrontWheelRightMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const truckFrontWheelRight = new THREE.Mesh(truckFrontWheelRightGeometry, truckFrontWheelRightMaterial);
truckFrontWheelRight.name = "Selecting truck's front wheel right";
truckFrontWheelRight.rotateX(Math.PI / 2);
truckFrontWheelRight.position.x = 1.2;
truckFrontWheelRight.position.z = 0.75;
truckFrontWheelRight.castShadow = true;
truck.add(truckFrontWheelRight);

const truckFrontWheelLeftGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3);
const truckFrontWheelLeftMaterial = new THREE.MeshMatcapMaterial({ color: 0x000000 });
const truckFrontWheelLeft = new THREE.Mesh(truckFrontWheelLeftGeometry, truckFrontWheelLeftMaterial);
truckFrontWheelLeft.name = "Selecting truck's front wheel left";
truckFrontWheelLeft.rotateX(Math.PI / 2);
truckFrontWheelLeft.position.x = 1.2;
truckFrontWheelLeft.position.z = -0.75;
truckFrontWheelLeft.castShadow = true;
truck.add(truckFrontWheelLeft);

// Truck platform
const truckPlatformGeometry = new THREE.CylinderGeometry(4.2, 4.5, 0.5, 256);
const truckPlatformMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff });
const truckPlatform = new THREE.Mesh(truckPlatformGeometry, truckPlatformMaterial);
truckPlatform.receiveShadow = true;
truckPlatform.position.set(0, -0.545, 0);

truck.position.y = 0.09;

// Scene
scene.add(car);
scene.add(carPlatform);
scene.add(truck);
scene.add(truckPlatform);

car.visible = true;
carPlatform.visible = true;
truck.visible = false;
truckPlatform.visible = false;

// Animation
function animate() {
    requestAnimationFrame(animate);

    car.rotation.y += 0.005;
    carPlatform.rotation.y += 0.005;
    truck.rotation.y += 0.005;
    truckPlatform.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();

// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 3, 4);
directionalLight.castShadow = true;
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
directionalLightHelper.visible = false;
scene.add(directionalLight, directionalLightHelper);

// Choosing vehice
const carCheckbox = document.getElementById('car');
const truckCheckbox = document.getElementById('truck');
carCheckbox.disabled = true;

carCheckbox.addEventListener("change", function () {
    if (carCheckbox.checked) {
        carCheckbox.disabled = true;
        truckCheckbox.disabled = false;
        truckCheckbox.checked = false;

        car.visible = true;
        carPlatform.visible = true;
        scene.add(car);
        scene.add(carPlatform);
        truck.visible = false;
        truckPlatform.visible = false;
        scene.remove(truck);
        scene.remove(truckPlatform);
    }
});

truckCheckbox.addEventListener("change", function () {
    if (truckCheckbox.checked) {
        truckCheckbox.disabled = true;
        carCheckbox.disabled = false;
        carCheckbox.checked = false;

        car.visible = false;
        carPlatform.visible = false;
        scene.remove(car);
        scene.remove(carPlatform);
        truck.visible = true;
        truckPlatform.visible = true;
        scene.add(truck);
        scene.add(truckPlatform);
    }
});

export{car, truck};

const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

let selectedObject = null;
const colorSelection = document.querySelector('.color-selection');
const newGreenColor = document.querySelector('#green');
const newBlueColor = document.querySelector('#blue');
const newRedColor = document.querySelector('#red');
let currentColor = null;
let selectedColor = null;

const partSelected = document.querySelector('.part-selected');

const onClick = (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        const newSelectedObject = intersects[0].object;

        // Check if the newly clicked object is different from the previously selected one
        if (newSelectedObject !== selectedObject) {
            // Update the selectedObject variable
            selectedObject = newSelectedObject;

            partSelected.innerHTML = selectedObject.name;
        }
    } else if (intersects.length === 0 && !colorSelection.contains(event.target)) {
        if (selectedObject && selectedColor) {
            selectedObject.material.color.set(selectedColor);
            selectedObject = null;
            selectedColor = null;
        }
        else if (selectedObject) {
            selectedObject = null;
            selectedColor = null;
        }
        colorSelection.style.display = 'none';
        partSelected.innerHTML = '';
    }

    if (selectedObject) {
        colorSelection.style.display = 'block';
    }

    // Color changing
    if (event.target === newGreenColor && selectedObject) {
        selectedColor = 0x00ff00;
        selectedObject.material.color.set(selectedColor);
    }
    else if (event.target === newBlueColor && selectedObject) {
        selectedColor = 0x0000ff;
        selectedObject.material.color.set(selectedColor);
    } else if (event.target === newRedColor && selectedObject) {
        selectedColor = 0xff0000;
        selectedObject.material.color.set(selectedColor);
    }

    selectedColor = null;
};

window.addEventListener('click', onClick);
