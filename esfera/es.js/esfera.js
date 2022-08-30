//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.Fog(0x3f7b9d);



//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.SphereGeometry( 1, 50, 30 );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x006364 } ) );
scene.add( line );
const material = new THREE.MeshDepthMaterial( { color: 0xffffff } );
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
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();