// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import  './style.css';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshMatcapMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// animate();

// element selector
const navButton = document.querySelector(".nav-button");
const menuContainer = document.querySelector(".menu-container");
const menuLinks = document.querySelectorAll(".menu-link");

// variable to toggle menuContainer
let showMenu = false;

// keep svg icon inside variables
const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

// add menuIcon by deafult
navButton.innerHTML = menuIcon;

// functions
const toggleShowMenu = () => {
  showMenu = !showMenu;

  if (showMenu) {
    navButton.innerHTML = closeIcon;
    menuContainer.classList.add("show");
  } else {
    navButton.innerHTML = menuIcon;
    menuContainer.classList.remove("show");
  }
};

// event listener
navButton.addEventListener("click", toggleShowMenu);

menuLinks.forEach((menuLink) =>
  menuLink.addEventListener("click", toggleShowMenu)
);
