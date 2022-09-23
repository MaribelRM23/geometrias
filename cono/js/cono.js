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
/*const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x00EEF1 } ) );
scene.add( line );*/
const material = new THREE.MeshNormalMaterial( );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 5;





//geometria2


const geometry2 = new THREE.ConeGeometry( 0.5, 1.8, 30 );
const edges2 = new THREE.EdgesGeometry( geometry );
const material2 = new THREE.MeshNormalMaterial( );
const cone2 = new THREE.Mesh( geometry, material );
scene.add( cone2 );

camera.position.z = 5;


//geometria3

const geometry3 = new THREE.ConeGeometry( 0.5, 1.8, 30 );
const edges3 = new THREE.EdgesGeometry( geometry );
const material3 = new THREE.MeshNormalMaterial( );
const cone3 = new THREE.Mesh( geometry, material );
scene.add( cone3 );

camera.position.z = 5;


//geometria4



const geometry4 = new THREE.ConeGeometry( 0.5, 1.8, 30 );
const edges4 = new THREE.EdgesGeometry( geometry );
const material4 = new THREE.MeshNormalMaterial( );
const cone4 = new THREE.Mesh( geometry, material );
scene.add( cone4 );


camera.position.z = 5;





/*var control = new THREE.OrbitControls(camera, renderer.domElement);
control.minDistance = 3;
control.maxDistance = 8;*/

/*const control = new THREE.PointerLockControls( camera, renderer.domElement);
document.getElementById('button').onclick = () => { control.lock()
};*/

cone.position.x = 2
cone2.position.y = -2
cone3.position.y= 2
cone4.position.x = -2

const controls = new THREE.DragControls( [cone, cone2, cone3, cone4 ], camera, renderer.domElement );

//animacion
function animate() {
	requestAnimationFrame( animate );
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    cone.rotation.z += 0.1;
    cone2.rotation.x += 0.01;
    cone2.rotation.y += 0.01;
    cone2.rotation.z += 0.1;
    cone3.rotation.x += 0.01;
    cone3.rotation.y += 0.01;
    cone3.rotation.z += 0.1;
    cone4.rotation.x += 0.01;
    cone4.rotation.y += 0.01;
    cone4.rotation.z += 0.1;
    /*line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.1;*/
	renderer.render( scene, camera );
}
animate();