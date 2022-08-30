//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x33D7FF); 
scene.fog = new THREE.Fog(0x76456c, 3, 6);

var loader = new  THREE.TextureLoader();
loader.load(
    '../imagenes/2.jpeg', function(texture){
     scene.background = texture;
    }
);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x380054 } ) );
scene.add( line );
const material = new THREE.LineDashedMaterial( {
	color: 0xffffff,
	linewidth: 1,
	scale: 1,
	dashSize: 3,
	gapSize: 1,
} );
const cube = new THREE.Line( geometry, material );
scene.add( cube );


camera.position.z = 5;

//animacion
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();