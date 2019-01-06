var position = MyAvatar.position;

	
var base = Entities.addEntity({
	name : "Maze Base",
	type: "Model",
	color: { red: 100, green: 100, blue: 100 },
	modelURL: 'file:///C:/maze/base/base.obj',
	dimensions: { x: 0.5, y: 0.5, z: 0.2 },
	position: Vec3.sum(position, {x: 0.0, y: 0.3, z: -2.0 }),   
	rotation: Quat.fromPitchYawRollDegrees(-90.0, 0.0, 0.0),    
	dynamic: true,
    kinematic: false,
	"shapeType": "static-mesh",
	userData: JSON.stringify({ grabbableKey: { grabbable: false } })
});
	
var maze = Entities.addEntity({
	name : "Maze",
	type: "Model",
	color: { red: 100, green: 100, blue: 100 },
	modelURL: 'file:///C:/maze/maze/maze.obj',
	dimensions: { x: 0.46, y: 0.46, z: 0.04 },
	localPosition: {x: 0.0, y: 0.0, z: 0.07 },   
	localRotation: Quat.fromPitchYawRollDegrees(0.0, 0.0, 0.0),    
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
    kinematic: false,
	dynamic: true
});
	
var ballCollector = Entities.addEntity({
	name : "Ball Collector",
	type: "Model",
	color: { red: 100, green: 100, blue: 100 },
	modelURL: 'file:///C:/maze/ballCollector/ballCollector.obj',
	dimensions: { x: 0.060, y: 0.068, z: 0.018 },
	localPosition: {x: -0.27, y: -0.22, z: -0.092 },   
	localRotation: Quat.fromPitchYawRollDegrees(0.0, 0.0, 270.0),    
	dynamic: true,
    kinematic: false,
	parentID: base,
	"shapeType": "static-mesh",
	userData: JSON.stringify({ grabbableKey: { grabbable: false } })
});
	
var knob_1 = Entities.addEntity({
	name : "Knob 1",
	type: "Model",
	color: { red: 100, green: 100, blue: 100 },
	modelURL: 'file:///C:/maze/knob/knob.obj',
	dimensions: { x: 0.050, y: 0.050, z: 0.030 },
	localPosition: {x: -0.27, y: 0.0, z: -0.005 },   
	localRotation: Quat.fromPitchYawRollDegrees(90.0, 0.0, 90.0),    
	dynamic: true,
	parentID: base,
	"shapeType": "static-mesh",
    userData: "{ \"grabbableKey\": { \"grabbable\": true, \"kinematic\": false } }"
});

var actionID = Entities.addAction("slider", knob_1, {
  axis: { x: 0, y: 1, z: 0 },
  linearLow: 0,
  linearHigh: 0.6
});
	
var knob_2 = Entities.addEntity({
	name : "Knob 1",
	type: "Model",
	color: { red: 100, green: 100, blue: 100 },
	modelURL: 'file:///C:/maze/knob/knob.obj',
	dimensions: { x: 0.050, y: 0.050, z: 0.030 },
	localPosition: {x: 0.0, y: -0.27, z: -0.0235 },   
	localRotation: Quat.fromPitchYawRollDegrees(90.0, 0.0, 180.0),    
	visible: true,
	dynamic: true,
    kinematic: false,
	parentID: base,
	"shapeType": "static-mesh"
});

// Delete all entities when finished
Script.scriptEnding.connect(function () {
  Entities.deleteEntity(base);
  Entities.deleteEntity(maze);
  Entities.deleteEntity(ball);
  Entities.deleteEntity(ballCollector);
  Entities.deleteEntity(knob_1);
  Entities.deleteEntity(knob_2);
});