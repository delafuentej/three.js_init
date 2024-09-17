import * as THREE from 'three';
// WebGL compatibility check
import WebGL from 'three/addons/capabilities/WebGL.js';

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

// Setting up: 
// 1. Scene
const scene = new THREE.Scene();
const scene2 = new THREE.Scene();
// 2. Camera

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//const camera2 = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 10, 500 );
// 3. Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
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