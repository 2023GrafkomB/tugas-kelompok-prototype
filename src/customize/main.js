import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'dat.gui'

const gui = new GUI()
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 7;
camera.position.y = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshPhysicalMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(boxGeometry, boxMaterial);
cube.castShadow = true;
scene.add(cube);

const cylinderGeometry = new THREE.CylinderGeometry(2.7, 3, 0.5, 21, 21);
const cylinderMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.receiveShadow = true;
cylinder.position.set(0, -0.7, 0);
scene.add(cylinder);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.y += 0.005;
    cylinder.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(2, 3, 4);
directionalLight.castShadow = true;
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
scene.add(directionalLight, directionalLightHelper);

const ambientLightFolder = gui.addFolder('Ambient Light')
const ambientLightSettings = {
    color: ambientLight.color.getHex()
};

ambientLightFolder.add(ambientLight, 'visible');

ambientLightFolder.add(ambientLight, 'intensity', 0, 1, 0.25);

ambientLightFolder.addColor(ambientLightSettings, 'color').onChange((value) => ambientLight.color.set(value));
ambientLightFolder.open()

const directionalLightFolder = gui.addFolder('Directional Light');
const directionalLightSettings = {
    visible: true,
    color: directionalLight.color.getHex(),
    positionX: directionalLight.position.x,
    positionY: directionalLight.position.y,
    positionZ: directionalLight.position.z
};

directionalLightFolder.add(directionalLightSettings, 'visible').onChange((value) => directionalLight.visible = value);
directionalLightFolder.add(directionalLight, 'intensity', 0, 1, 0.25);

directionalLightFolder.addColor(directionalLightSettings, 'color').onChange((value) => directionalLight.color.set(value));

directionalLightFolder.add(directionalLightSettings, 'positionX', -10, 10).onChange((value) => {
    directionalLight.position.x = value;
    directionalLightHelper.update();
});
directionalLightFolder.add(directionalLightSettings, 'positionY', -10, 10).onChange((value) => {
    directionalLight.position.y = value;
    directionalLightHelper.update();
});
directionalLightFolder.add(directionalLightSettings, 'positionZ', -10, 10).onChange((value) => {
    directionalLight.position.z = value;
    directionalLightHelper.update();
});

directionalLightFolder.add(directionalLight, 'castShadow').onChange((value) => directionalLightHelper.visible = value);
directionalLightFolder.open();

const cylinderFolder = gui.addFolder('Cylinder');
const cylinderSettings = {
    visible: true,
    color: cylinderMaterial.color.getHex(),
};
const cylinderParams = {
    radiusTop: cylinder.geometry.parameters.radiusTop,
    radiusBottom: cylinder.geometry.parameters.radiusBottom,
    height: cylinder.geometry.parameters.height,
    radialSegments: cylinder.geometry.parameters.radialSegments,
    heightSegments: cylinder.geometry.parameters.heightSegments,
};
cylinderFolder.add(cylinderSettings, 'visible').onChange((value) => cylinder.visible = value);
cylinderFolder.addColor(cylinderSettings, 'color').onChange((value) => cylinderMaterial.color.set(value));
cylinderFolder.add(cylinderParams, 'radiusTop', 0, 10).onChange((value) => {
    cylinder.geometry = new THREE.CylinderGeometry(value, cylinderParams.radiusBottom, cylinderParams.height, cylinderParams.radialSegments, cylinderParams.heightSegments, cylinderParams.openEnded, cylinderParams.thetaStart, cylinderParams.thetaLength);
});
cylinderFolder.add(cylinderParams, 'radiusBottom', 0, 10).onChange((value) => {
    cylinder.geometry = new THREE.CylinderGeometry(cylinderParams.radiusTop, value, cylinderParams.height, cylinderParams.radialSegments, cylinderParams.heightSegments, cylinderParams.openEnded, cylinderParams.thetaStart, cylinderParams.thetaLength);
});
cylinderFolder.add(cylinderParams, 'height', 0, 10).onChange((value) => {
    cylinder.geometry = new THREE.CylinderGeometry(cylinderParams.radiusTop, cylinderParams.radiusBottom, value, cylinderParams.radialSegments, cylinderParams.heightSegments, cylinderParams.openEnded, cylinderParams.thetaStart, cylinderParams.thetaLength);
});
cylinderFolder.add(cylinderParams, 'radialSegments', 0, 64).onChange((value) => {
    cylinder.geometry = new THREE.CylinderGeometry(cylinderParams.radiusTop, cylinderParams.radiusBottom, cylinderParams.height, value, cylinderParams.heightSegments, cylinderParams.openEnded, cylinderParams.thetaStart, cylinderParams.thetaLength);
});
cylinderFolder.add(cylinderParams, 'heightSegments', 0, 64).onChange((value) => {
    cylinder.geometry = new THREE.CylinderGeometry(cylinderParams.radiusTop, cylinderParams.radiusBottom, cylinderParams.height, cylinderParams.radialSegments, value, cylinderParams.openEnded, cylinderParams.thetaStart, cylinderParams.thetaLength);
});
cylinderFolder.open();

