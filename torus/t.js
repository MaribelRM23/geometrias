//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
//scene.fog = new THREE.Fog(0x3f7b9d);


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );


const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../text/1.jpg');

const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading =  true;


const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xFFFFFF } ) );
scene.add( line );

camera.position.z = 50;
camera.position.x =  2;
camera.position.y = 0.20;

//animacion
function animate() {
	requestAnimationFrame( animate );
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    torusKnot.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();