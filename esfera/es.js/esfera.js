//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
//scene.fog = new THREE.Fog(0x3f7b9d);

var loader = new  THREE.TextureLoader();
loader.load(
    './imagenes/bola.png', function(texture){
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

const geometry = new THREE.SphereGeometry( 1, 50, 30 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../text/3.jpg');

const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading =  true;


const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

camera.position.z = 10;


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