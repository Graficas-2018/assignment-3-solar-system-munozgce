var renderer = null,
scene = null,
camera = null;


var duration = 5000; // ms
var currentTime = Date.now();

var planetGroup, planet_1, planet_2, planet_3, planet_4, planet_5, planet_6, planet_7, planet_8, planet_9,
    planet_10;
var planet_2_orbit, planet_3_orbit, planet_4_orbit, planet_5_orbit, planet_6_orbit, planet_7_orbit,
    planet_8_orbit, planet_9_orbit, planet_10_orbit;

var planet_4_moons, planet_5_moons, planet_6_moons, planet_7_moons, planet_8_moons, planet_9_moons;

var planet_4_planet_1_1, planet_5_planet_111, planet_5_planet_112, planet_6_planet_111, planet_6_planet_112,
    planet_6_planet_113, planet_6_planet_114, planet_7_planet_111, planet_7_planet_112, planet_7_planet_113,
    planet_8_planet_111, planet_8_planet_112, planet_9_planet_111, planet_9_planet_112;

var planet_11_AG;
var planet_11_a;

function animate(){
    var now = Date.now();
    var deltat = now - currentTime;
    currentTime = now;
    var fract = deltat / duration;
    var angle = Math.PI * 2 * fract;
    //var movement = now * 0.001;

    // Rotate the cube about its Y axis
    //cube.rotation.y += angle;
    planetGroup.rotation.y += angle;
    planet_4_moons.rotation.y += angle;
    planet_5_moons.rotation.y += angle;
    planet_6_moons.rotation.y += angle;
    planet_7_moons.rotation.y += angle;
    planet_8_moons.rotation.y += angle;
    planet_9_moons.rotation.y += angle;
    planet_1.rotation.y += angle * 0.5;
    planet_2.rotation.y += angle;
    planet_3.rotation.y += angle;
    planet_4.rotation.y += angle;
    planet_4_planet_1_1.rotation.y += angle;
    planet_5.rotation.y += angle;
    planet_5_planet_111.rotation.y += angle;
    planet_5_planet_112.rotation.y += angle;
    planet_6.rotation.y += angle;
    planet_6_planet_111.rotation.y += angle;
    planet_6_planet_112.rotation.y += angle;
    planet_6_planet_113.rotation.y += angle;
    planet_6_planet_114.rotation.y += angle;
    planet_7.rotation.y += angle;
    planet_7_planet_111.rotation.y += angle;
    planet_7_planet_112.rotation.y += angle;
    planet_7_planet_113.rotation.y += angle;
    planet_8.rotation.y += angle;
    planet_8_planet_111.rotation.y += angle;
    planet_8_planet_112.rotation.y += angle;
    planet_9.rotation.y += angle;
    planet_9_planet_111.rotation.y += angle;
    planet_9_planet_112.rotation.y += angle;
    planet_10.rotation.y += angle;
    planet_11_a.rotation.y += angle;

}

function run() {
    requestAnimationFrame(function() { run(); });

    // Render the scene
    renderer.render( scene, camera );
    // Spin the cube for next frame
    animate();
}

function createScene(canvas){
    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );

    // Set the viewport size
    renderer.setSize(canvas.width, canvas.height);

    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Set the background color 
    scene.background = new THREE.Color( 0, 0, 0 );
    // scene.background = new THREE.Color( "rgb(100, 100, 100)" );

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 95, canvas.width / canvas.height, 1, 4000 );
    console.log(camera.position)
    camera.position.z = 50;
    camera.position.y = 20;
    scene.add(camera);

    // Create a group to hold all the objects
    //cubeGroup = new THREE.Object3D;

    //var textureUrl = ".ash_uvgrid01.jpg";
    //var texture = new THREE.TextureLoader().load(textureUrl);
    //var material = new THREE.MeshPhongMaterial({ map: texture });

    // Create the cube geometry
    //var geometry = new THREE.CubeGeometry(2, 2, 2);

    // And put the geometry and material together into a mesh
    //cube = new THREE.Mesh(geometry, material);

    // Tilt the mesh toward the viewer
    //cube.rotation.x = Math.PI / 5;
    //cube.rotation.y = Math.PI / 5;

    // Add the cube mesh to our group
    //cubeGroup.add( cube );

    // Create a group for the sphere
    //sphereGroup = new THREE.Object3D;
    //cubeGroup.add(sphereGroup); 
    planetGroup = new THREE.Object3D;

    // Move the sphere group up and back from the cube
    //sphereGroup.position.set(0, 3, -4);

    // Create a group for the sphere (para la tierra)
    planet_4_moons = new THREE.Object3D;
     // Add the cube mesh to our group
    planetGroup.add(planet_4_moons);

    // Move the sphere group up and back from the cube
    planet_4_moons.position.set(0, 0, -9);

    // Create a group for the sphere
    planet_5_moons = new THREE.Object3D;
    // Add the cube mesh to our group
    planetGroup.add(planet_5_moons);
    planet_5_moons.position.set(0, 0, 14);

    // Create a group for the sphere
    planet_6_moons = new THREE.Object3D;
    // Add the cube mesh to our group
    planetGroup.add(planet_6_moons);
    planet_6_moons.position.set(-24, 0, 0);

    // Create a group for the sphere
    planet_7_moons = new THREE.Object3D;
    // Add the cube mesh to our group
    planetGroup.add(planet_7_moons);
    planet_7_moons.position.set(31, 0, 0);

    // Create a group for the sphere
    planet_8_moons = new THREE.Object3D;
    // Add the cube mesh to our group
    planetGroup.add(planet_8_moons);
    planet_8_moons.position.set(0, 0, -34);

    // Create a group for the sphere
    planet_9_moons = new THREE.Object3D;
    // Add the cube mesh to our group
    planetGroup.add(planet_9_moons);
    planet_9_moons.position.set(0, 0, 37);

    planet_11_AG = new THREE.Object3D; // Random planet_11_as

    // Add a directional light to show off the objects
    var light = new THREE.PointLight( 0xf0f0f0, 1.5, 100);
    // var light = new THREE.DirectionalLight( "rgb(255, 255, 100)", 1.5);

    // Position the light out from the scene, pointing at the origin
    light.position.set(-.5, .2, 1);
    //light.target.position.set(0,-2,0);
    planetGroup.add(light);
    //planet_2_orbit.add(light);

    //planet_3_orbit.add(light);
    //planet_4_orbit.add(light);
    //planet_5_orbit.add(light);
    //planet_6_orbit.add(light);
    //planet_7_orbit.add(light);
    //planet_8_orbit.add(light);
    //planet_9_orbit.add(light);
    //planet_10_orbit.add(light);




    textureUrl = "planet_1.jpg";
    var texture = new THREE.TextureLoader().load(textureUrl);
    var material = new THREE.MeshBasicMaterial({ map: texture });

    // Create the sphere geometry
    var geometry = new THREE.SphereGeometry(3, 24, 24);

    // And put the geometry and material together into a mesh
    planet_1 = new THREE.Mesh(geometry, material);

    // Add the sphere mesh to our group
    planetGroup.add( planet_1 );

    textureUrl = "planet_2.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(0.29, 19, 19);
    planet_2 = new THREE.Mesh(geometry, material);
    planet_2.position.set(-7.9, 0, 0);
    planetGroup.add( planet_2 );
    textureUrl = "planet_3.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(0.51, 19, 19);
    planet_3 = new THREE.Mesh(geometry, material);
    planet_3.position.set(12, 0, 0);
    planetGroup.add( planet_3 );
    textureUrl = "planet_4.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(0.49, 20, 20);
    planet_4 = new THREE.Mesh(geometry, material);
    planet_4_moons.add( planet_4 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_4_planet_1_1 = new THREE.Mesh(geometry, material);
    planet_4_planet_1_1.position.set(1, 0, 0);
    planet_4_moons.add( planet_4_planet_1_1 );
    textureUrl = "planet_5.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(0.41, 20, 20);
    planet_5 = new THREE.Mesh(geometry, material);
    planet_5_moons.add( planet_5 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.14, 20, 20);
    planet_5_planet_111 = new THREE.Mesh(geometry, material);
    planet_5_planet_111.position.set(1, 0, 0);
    planet_5_moons.add( planet_5_planet_111 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_5_planet_112 = new THREE.Mesh(geometry, material);
    planet_5_planet_112.position.set(-1, 0, 0);
    planet_5_moons.add( planet_5_planet_112 );
    textureUrl = "planet_6.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(1.6, 20, 20);
    planet_6 = new THREE.Mesh(geometry, material);
    planet_6_moons.add( planet_6 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_6_planet_111 = new THREE.Mesh(geometry, material);
    planet_6_planet_111.position.set(2, 0, 0);
    planet_6_moons.add( planet_6_planet_111 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_6_planet_112 = new THREE.Mesh(geometry, material);
    planet_6_planet_112.position.set(-2, 0, 0);
    planet_6_moons.add( planet_6_planet_112 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_6_planet_113 = new THREE.Mesh(geometry, material);
    planet_6_planet_113.position.set(0, 2, 0);
    planet_6_moons.add( planet_6_planet_113 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_6_planet_114 = new THREE.Mesh(geometry, material);
    planet_6_planet_114.position.set(0, 1, -2);
    planet_6_moons.add( planet_6_planet_114 );
    textureUrl = "planet_7.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(1.1, 20, 20);
    planet_7 = new THREE.Mesh(geometry, material);
    planet_7_moons.add( planet_7 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_7_planet_111 = new THREE.Mesh(geometry, material);
    planet_7_planet_111.position.set(0, 1, -2);
    planet_7_moons.add( planet_7_planet_111 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_7_planet_112 = new THREE.Mesh(geometry, material);
    planet_7_planet_112.position.set(0, 2, 0);
    planet_7_moons.add( planet_7_planet_112 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_7_planet_113 = new THREE.Mesh(geometry, material);
    planet_7_planet_113.position.set(2, 0, 2);
    planet_7_moons.add( planet_7_planet_113 );
    textureUrl = "planet_8.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(0.7, 20, 20);
    planet_8 = new THREE.Mesh(geometry, material);
    planet_8_moons.add( planet_8 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_8_planet_111 = new THREE.Mesh(geometry, material);
    planet_8_planet_111.position.set(0, 0.5, -1);
    planet_8_moons.add( planet_8_planet_111 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_8_planet_112 = new THREE.Mesh(geometry, material);
    planet_8_planet_112.position.set(1, 1, 0);
    planet_8_moons.add( planet_8_planet_112 );
    textureUrl = "planet_9.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(0.7, 20, 20);
    planet_9 = new THREE.Mesh(geometry, material);
    planet_9_moons.add( planet_9 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_9_planet_111 = new THREE.Mesh(geometry, material);
    planet_9_planet_111.position.set(0, .9, -.5);
    planet_9_moons.add( planet_9_planet_111 );
    textureUrl = "planet_11.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    planet_9_planet_112 = new THREE.Mesh(geometry, material);
    planet_9_planet_112.position.set(0.5, 0, 1);
    planet_9_moons.add( planet_9_planet_112 );
    textureUrl = "planet_10.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(0.25, 20, 20);
    planet_10 = new THREE.Mesh(geometry, material);
    planet_10.position.set(-44, 0, 0);
    planetGroup.add( planet_10 );

    textureURL = "planet_2.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });

    // Create the sphere geometry
    geometry = new THREE.TorusGeometry( 8, 0.1, 16, 100 );
    planet_2_orbit = new THREE.Mesh( geometry, material );
    planet_2_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( planet_2_orbit );

    textureURL = "planet_3.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });

    // Create the sphere geometry
    geometry = new THREE.TorusGeometry( 12, 0.1, 16, 100 );
    planet_3_orbit = new THREE.Mesh( geometry, material );
    planet_3_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( planet_3_orbit );

    textureURL = "planet_4.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });

    // Create the sphere geometry
    geometry = new THREE.TorusGeometry( 16, 0.1, 16, 100 );
    planet_4_orbit = new THREE.Mesh( geometry, material );
    planet_4_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( planet_4_orbit );

    textureURL = "planet_5.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });

    // Create the sphere geometry
    geometry = new THREE.TorusGeometry( 20, 0.1, 16, 100 );
    planet_5_orbit = new THREE.Mesh( geometry, material );
    planet_5_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( planet_5_orbit );

    textureURL = "planet_6.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });

    // Create the sphere geometry
    geometry = new THREE.TorusGeometry( 28, 0.1, 16, 100 );
    planet_6_orbit = new THREE.Mesh( geometry, material );
    planet_6_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( planet_6_orbit );

    textureURL = "planet_7.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });

    // Create the sphere geometry
    geometry = new THREE.TorusGeometry( 32, 0.1, 16, 100 );
    planet_7_orbit = new THREE.Mesh( geometry, material );
    planet_7_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( planet_7_orbit );

    textureURL = "planet_8.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });

    // Create the sphere geometry
    geometry = new THREE.TorusGeometry( 36, 0.1, 16, 100 );
    planet_8_orbit = new THREE.Mesh( geometry, material );
    planet_8_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( planet_8_orbit );

    textureURL = "planet_9.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });

    // Create the sphere geometry
    geometry = new THREE.TorusGeometry( 40, 0.1, 16, 100 );
    planet_9_orbit = new THREE.Mesh( geometry, material );
    planet_9_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( planet_9_orbit );

    textureURL = "planet_10.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });

    // Create the sphere geometry
    geometry = new THREE.TorusGeometry( 44, 0.1, 16, 100 );
    planet_10_orbit = new THREE.Mesh( geometry, material );
    planet_10_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( planet_10_orbit );

    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(.1, 20, 20);
    texture = new THREE.TextureLoader().load('planet_11.jpg');
    material = new THREE.MeshPhongMaterial({ map: texture, bumpMap: '', bumpScale: 0.05 });
    geometry = new THREE.TorusGeometry( 0, 0, 0,0 );
    planet_10_orbit = new THREE.Mesh( geometry, material );
    planet_11_AG.rotation.x = Math.PI / 2;
    planetGroup.add(planet_11_AG);

    // Now add the group to our scene
    scene.add( planetGroup );
}
