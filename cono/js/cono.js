//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xDFD8FE,);
scene.fog = new THREE.Fog(0x0049FF, 2, 1);



//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.ConeGeometry( 0.5, 1.8, 30 );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x00EEF1 } ) );
scene.add( line );
const material = new THREE.MeshNormalMaterial( {color: 0xF10000} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone )

camera.position.z = 2;
camera.position.x = -1;
camera.position.y = 0.1;

//animacion
function animate() {
	requestAnimationFrame( animate );
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    cone.rotation.z += 0.1;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.1;
	renderer.render( scene, camera );
}
animate();