//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
//scene.fog = new THREE.Fog(0x3f7b9d);

var loader = new  THREE.TextureLoader();
loader.load(
    './imagenes/fondo.png', function(texture){
     scene.background = texture;
    }
);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../text/2.jpg');

const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading =  true;


const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

camera.position.z = 70;
camera.position.x =  2;
camera.position.y = 0.20;

//animacion
function animate() {
	requestAnimationFrame( animate );
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    torus.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();