//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xD6D6D6);
scene.fog = new THREE.Fog(0x000000, 0.2, 6);



//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.SphereGeometry( 1, 50, 30 );
const material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 5;
camera.position.x =  2;
camera.position.y = 0.20;

//animacion
function animate() {
	requestAnimationFrame( animate );
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();