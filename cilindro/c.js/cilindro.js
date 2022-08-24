//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x5DD1D6);
scene.fog = new THREE.Fog(0x76456c, 0.1, 8);

var loader = new  THREE.TextureLoader();
loader.load(
    '../img/f.jpeg', function(texture){
     scene.background = texture;
    }
);

//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.CylinderGeometry( 0.80, 0.80, 4, 15 );
const material = new THREE.MeshBasicMaterial( {color: 0xF9F7FF} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 5;

//animacion
function animate() {
	requestAnimationFrame( animate );
    cylinder.rotation.x += 0.01;
   cylinder.rotation.y += 0.01;
    cylinder.rotation.z += 0.1;
	renderer.render( scene, camera );
}
animate();