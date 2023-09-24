import { OrbitControls } from "/js/OrbitControls.js";

var renderer;
var camera;
var controls;

export class Factory {

    constructor(posx, posy, posz, len) {
        // Choose/Create and set your camera
        camera = new THREE.PerspectiveCamera(
            75, // field of view
            window.innerWidth / window.innerHeight, //aspect ratio
            0.5, //near clipping plane
            1000 //far clipping plane
        )
        camera.position.set(posx, posy, posz).setLength(len);

        this.render();
        this.controls();
        this.resizeWindow();
    }

    render() {
        // Get the HTML component first (by specific Id) in which you want to render your world
        var main = document.getElementById("main");
        // Create the renderer which will draw your world on web browser
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        
        // Pass the renderer to the HTML component of your app you have chossen earlier
        main.appendChild(renderer.domElement);


    }

    controls() {
        // This will create imaginary oorbits around your world.
        // Orbit controls allow the camera to orbit around a target.
        controls = new OrbitControls(camera, renderer.domElement)
    }

    renderScene(scene) {
        renderer.render(scene, camera)
    }

    resizeWindow() {
        //make window responsive
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;

            camera.updateProjectionMatrix();
        });
    }

    plane() {
        // this grid helper will help you in alligning your objects
        //you can remove this peice of code after your are done with designing your world
        var plane = new THREE.GridHelper(100, 10);
        scene.add(plane); 0
    }

}