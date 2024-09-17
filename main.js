import * as THREE from 'three';

// To actually be able to display anything with three.js, we need three things: scene, camera and renderer

// Setting up: 
// 1. Scene
const scene = new THREE.Scene();
// 2. Camera

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// 3. Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// To create a cube, we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube
const geometry = new THREE.BoxGeometry( 1, 1,1 );
// material:  Three.js comes with several materials but we'll stick to the MeshBasicMaterial for now
const material = new THREE.MeshBasicMaterial( { color: 0xffa500} );
//Mesh is an object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around.
const cube = new THREE.Mesh( geometry, material );

//the thing we add will be added to the coordinates (0,0,0)
scene.add( cube );

camera.position.z = 5;

function animate() {

    //animating the cube
	cube.rotation.x += -0.03;
	cube.rotation.y += 0.01;

    // Rendering the scene
	renderer.render( scene, camera );

}