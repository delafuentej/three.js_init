import * as THREE from 'three';

// console.log('THREE', THREE);

// Canvas
const canvas = document.querySelector('canvas.webgl');


//Scene
const scene = new THREE.Scene();

// Object;
//- shape: geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
// - material: how it looks
const material = new THREE.MeshBasicMaterial({color:  0x6a5acd, wireframe: true});

const mesh = new THREE.Mesh(geometry, material);

// we need to add the object(mesh) to the scene
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
};
//Camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height);

// To add the camera to the scene. This is optional, but can result in bugs
scene.add(camera);

// z => forwards/ backwards
camera.position.x= 0;
camera.position.y= 0;
camera.position.z = 2;

// Renderer => will render the scene seen from the camera's point of view
// - the result will be drawn into a canvas
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
// resizes the renderer
renderer.setSize(sizes.width, sizes.height);

// call the render method on the cenderer and send it to the scene and the camera
renderer.render(scene, camera);

