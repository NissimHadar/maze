var position = MyAvatar.position;

	
var base = Entities.addEntity({
	name : "Maze Base",
	type: "Model",
	color: { red: 100, green: 100, blue: 100 },
	modelURL: 'file:///C:/maze/base/base.obj',
	dimensions: { x: 0.5, y: 0.5, z: 0.2 },
	position: Vec3.sum(position, {x: 0.0, y: 0.3, z: -2.0 }),   
	rotation: Quat.fromPitchYawRollDegrees(-90.0, 0.0, 0.0),    
	visible: true,
	dynamic: true,
    kinematic: false,
	"shapeType": "static-mesh"
});
	
var maze = Entities.addEntity({
	name : "Maze",
	type: "Model",
	color: { red: 100, green: 100, blue: 100 },
	modelURL: 'file:///C:/maze/maze/maze.obj',
	dimensions: { x: 0.46, y: 0.46, z: 0.1 },
	localPosition: {x: 0.0, y: 0.0, z: 0.05 },   
	localRotation: Quat.fromPitchYawRollDegrees(0.0, 0.0, 0.0),    
	visible: true,
	dynamic: true,
    kinematic: false,
	parentID: base,
	"shapeType": "static-mesh",
	userData: JSON.stringify({ grabbableKey: { grabbable: false } })
});
	
var ball = Entities.addEntity({
	name: "Maze Ball",
	type: "Sphere",
	color: { red: 0, green: 255, blue: 255 },
	dimensions: { x: 0.03, y: 0.03, z: 0.03 },
	position: Vec3.sum(position, {x: 0.0, y: 0.5, z: -2.0 }),   
	gravity: {x: 0.0, y: -1.0, z: 0.0 },   
	visible: true,
    kinematic: false,
	dynamic: true
});
	
var ballCollector = Entities.addEntity({
	name : "Ball Collector",
	type: "Model",
	color: { red: 100, green: 100, blue: 100 },
	modelURL: 'file:///C:/maze/ballCollector/ballCollector.obj',
	dimensions: { x: 0.050, y: 0.062, z: 0.025 },
	localPosition: {x: -0.28, y: -0.22, z: -0.089 },   
	localRotation: Quat.fromPitchYawRollDegrees(0.0, 0.0, 270.0),    
	visible: true,
	dynamic: true,
    kinematic: false,
	parentID: base,
	"shapeType": "static-mesh",
	userData: JSON.stringify({ grabbableKey: { grabbable: false } })
});

// Delete all entities when finished
Script.scriptEnding.connect(function () {
  Entities.deleteEntity(base);
  Entities.deleteEntity(maze);
  Entities.deleteEntity(ball);
  Entities.deleteEntity(ballCollector);
});