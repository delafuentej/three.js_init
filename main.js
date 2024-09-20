import * as THREE from 'three';
// WebGL compatibility check
//import WebGL from 'three/addons/capabilities/WebGL.js';

//The following method allows you to check if it is supported and display a message to the user if it is not
// if ( WebGL.isWebGL2Available() ) {

// 	// Initiate function or other initializations here
// 	animate();

// } else {

// 	const warning = WebGL.getWebGL2ErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );

// }
// To actually be able to display anything with three.js, we need three things: scene, camera and renderer
// You pass a Scene and a Camera to a Renderer and it renders (draws) the portion of the 3D scene that is inside

// we need 4 elements for a basic scene
// 1. Scene
// 2. Objects
    // - Can be many things like primitive geometries, shapes, imported models, particles, add lights, etc
    // - An object like a visible object in Three.js is called Mesh
    // - Mesh ia a combination of a geometry(shape) and a material(how it looks)
// 3. Camera
// 4. Renderer


// Setting up: 
// 1. Scene
const scene = new THREE.Scene();
const scene2 = new THREE.Scene();
// 2. Camera
//A (perspective) camera simulates the behaviour of a film camera in real life
//When you set up a camera you need to pass:(These 4 values dictate the 3D space )
// - in a vertical field of view (fov) => This dictates the size of the vertical space your camera's view can reach.
// -an aspect ratio => This is the aspect ratio you use to create the horizontal field of view based off the vertical.
// - a near plane => This is the nearest plane of view (where the camera's view begins).
// -and a far plane => This is the far plane of view (where the camera's view ends).
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//const camera2 = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 10, 500 );
// 3. Renderer (add a renderer)
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
// add the renderer element to the DOM so it is in our page
document.body.appendChild( renderer.domElement );

// To create a cube, we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube
const geometry = new THREE.BoxGeometry( 1, 1,1 );
const geometry2 = new THREE.BoxGeometry( 1, 1,1 );
const geometry3 = new THREE.BoxGeometry( 1, 1,1 );
// material:  Three.js comes with several materials but we'll stick to the MeshBasicMaterial for now
const material = new THREE.MeshBasicMaterial( { color: 0xffa500} );
const material2 = new THREE.MeshBasicMaterial( { color: 0x3cb371} );
const material3 = new THREE.MeshBasicMaterial( { color: 0x6a5acd} );
//Mesh is an object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around.
const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry2, material2 );
const cube3 = new THREE.Mesh( geometry3, material3 );

//the thing we add will be added to the coordinates (0,0,0)
scene.add( cube );
scene.add( cube2 );
scene.add( cube3 );

// place the camera at z of 100 => it is a theoretical point of view used when rendering
// we can have multiple cameras but usually we only use one for the scene

// we can transform objects using 'position', 'rotation', 'scale'
// - we use the position property to move the camera backward/ forwards:
// 'position' is an object with three relevant properties: x, y, z(backwards, forwards)
camera.position.z = 5;

function animate() {

    //animating the cube
	cube.rotation.x += -0.03;
	cube.rotation.y += 0.01;

    cube2.rotation.y -= 0.05;
    cube.rotation.z -= 0.01;

    cube3.rotation.x += 0.04;
    cube.rotation.z -= 0.01;
    // Rendering the scene 
	renderer.render( scene, camera );
    
}