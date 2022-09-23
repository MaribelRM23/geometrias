//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x33D7FF); 
//scene.fog = new THREE.Fog(0x76456c, 3, 6);

var loader = new  THREE.TextureLoader();
loader.load(
    './imagenes/fondo.jpg', function(texture){
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

const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../text/4.jpg');

const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading =  true;

const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );



camera.position.z = 5;


//animacion
function animate() {
	requestAnimationFrame( animate );
    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;
    capsule.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();