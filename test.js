var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.ArcRotateCamera("camera1", 0, 1.20, 10, new BABYLON.Vector3(0, 0, 0),scene);

    // This targets the camera to scene origin
    camera.setTarget(new BABYLON.Vector3(0,2,0));

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.9;

    // Our built-in 'sphere' shape.
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 0.03, segments: 32}, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 2;

    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width:1.2, height: 7}, scene);
    


    // Left side

    // Carreau1L 
    var Carreau1L = BABYLON.MeshBuilder.CreateBox("Carreau1L", {height: 1.80, width: 0.01, depth: 0.50});
    Carreau1L.position = new BABYLON.Vector3(-0.5, 3, -2.1);

    // Carreau2L 
    var Carreau2L = BABYLON.MeshBuilder.CreateBox("Carreau2L", {height: 1.80, width: 0.01, depth: 0.60});
    Carreau2L.position = new BABYLON.Vector3(-0.45, 1, -2.0);

    // Carreau3L
    var Carreau3L = BABYLON.MeshBuilder.CreateBox("Carreau3L", {height: 1.70, width: 0.01, depth: 0.60});
    Carreau3L.position = new BABYLON.Vector3(-0.30, 3.2, -1.8);

    // Carreau4L
    var Carreau4L = BABYLON.MeshBuilder.CreateBox("Carreau4L", {height: 1.70, width: 0.01, depth: 0.60});
    Carreau4L.position = new BABYLON.Vector3(-0.15, 1.4, -1.7);

    // Carreau5L 
    var Carreau5L = BABYLON.MeshBuilder.CreateBox("Carreau5L", {height: 1.20, width: 0.01, depth: 0.60});
    Carreau5L.position = new BABYLON.Vector3(-0.2, 3, -0.8);

    // Carreau6L 
    var Carreau6L = BABYLON.MeshBuilder.CreateBox("Carreau6L", {height: 1.2, width: 0.01, depth: 0.60});
    Carreau6L.position = new BABYLON.Vector3(-0.4, 3.2, -1.2);

    // Carreau7L
    var Carreau7L = BABYLON.MeshBuilder.CreateBox("Carreau7L", {height: 0.70, width: 0.01, depth: 0.60});
    Carreau7L.position = new BABYLON.Vector3(0.15, 1.2, -0.8);

    // Carreau8L
    var Carreau8L = BABYLON.MeshBuilder.CreateBox("Carreau8L", {height: 0.90, width: 0.01, depth: 0.60});
    Carreau8L.position = new BABYLON.Vector3(0.3, 0.8, -0.5);
    
    
    
    //Right Side

    // Carreau1R 
    var Carreau1R = BABYLON.MeshBuilder.CreateBox("Carreau1R", {height: 1.80, width: 0.01, depth: 0.50});
    Carreau1R.position = new BABYLON.Vector3(-0.5, 3, 2.1);

    // Carreau2R 
    var Carreau2R = BABYLON.MeshBuilder.CreateBox("Carreau2R", {height: 1.80, width: 0.01, depth: 0.60});
    Carreau2R.position = new BABYLON.Vector3(-0.45, 1, 2.0);

    // Carreau3R
    var Carreau3R = BABYLON.MeshBuilder.CreateBox("Carreau3R", {height: 1.70, width: 0.01, depth: 0.60});
    Carreau3R.position = new BABYLON.Vector3(-0.30, 3.2, 1.8);

    // Carreau4R
    var Carreau4R = BABYLON.MeshBuilder.CreateBox("Carreau4R", {height: 1.70, width: 0.01, depth: 0.60});
    Carreau4R.position = new BABYLON.Vector3(-0.15, 1.4, 1.7);
    
    // Carreau5R 
    var Carreau5R = BABYLON.MeshBuilder.CreateBox("Carreau5R", {height: 1.20, width: 0.01, depth: 0.60});
    Carreau5R.position = new BABYLON.Vector3(-0.2, 3, 0.8);

    // Carreau6R 
    var Carreau6R = BABYLON.MeshBuilder.CreateBox("Carreau6R", {height: 1.2, width: 0.01, depth: 0.60});
    Carreau6R.position = new BABYLON.Vector3(-0.4, 3.2, 1.2);

    // Carreau7R
    var Carreau7R = BABYLON.MeshBuilder.CreateBox("Carreau7R", {height: 0.70, width: 0.01, depth: 0.60});
    Carreau7R.position = new BABYLON.Vector3(0.15, 1.2, 0.8);

    // Carreau8R
    var Carreau8R = BABYLON.MeshBuilder.CreateBox("Carreau8R", {height: 0.70, width: 0.01, depth: 0.60});
    Carreau8R.position = new BABYLON.Vector3(0.3, 0.8, 0.5);
    

    return scene;

};