var scene = document.querySelector("a-scene");

if (scene.hasLoaded) {
    run();
} else {
    scene.addEventListener("loaded", run);
}

//outlineEffect = new THREE.OutlineEffect(renderer);

function run() {
    const house = document.querySelector(".house");
    const cursor = document.querySelector("a-cursor");
    const camera = document.querySelector("a-camera");
    const clickfield = document.querySelector("#clickfield");
    console.log("clickfield", clickfield);

    const screenSize = {
        width: scene.canvas.width,
        height: scene.canvas.height,
    };
    // const orientation =
    //     screenSize.width > screenSize.height ? "horizontal" : "vertical";

    // house.addEventListener("mousedown", function (event) {
    //     console.log("here clicked");
    //     house.setAttribute("color", "green");
    // });
    //console.log(house.getObject3D("mesh").geometry);

    scene.addEventListener("mousedown", (event) => {
        const clickPosition = { x: event.layerX, y: event.layerY };
        const oneUnitInPixels = screenSize.height / 2; // This is also used as 'centerPixelY'
        const centerPixelX = screenSize.width / 2;
        const unitX = (clickPosition.x - centerPixelX) / oneUnitInPixels;
        const unitY = (clickPosition.y - oneUnitInPixels) / oneUnitInPixels;
        const unitZ = cursor.object3D.position.z;
        console.log("unitX", unitX, unitY, unitZ);

        cursor.setAttribute("position", `${unitX} ${unitY} ${unitZ + 1.1}`);
    });
}
