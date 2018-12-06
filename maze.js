var position = MyAvatar.position;

entities = [];
	
entities.push(Entities.addEntity({
	name : "Maze Base",
	type: "Model",
	modelURL: 'file:///C:/maze/base/base.obj',
	dimensions: { x: 0.5, y: 0.5, z: 0.2 },
	position: Vec3.sum(position, {x: 0.0, y: 0.3, z: -2.0 }),   
	rotation: Quat.fromPitchYawRollDegrees(-90.0, 0.0, 0.0),    
	visible: true,
	dynamic: true,
	userData: JSON.stringify({ grabbableKey: { grabbable: false } })
}));
	
entities.push(Entities.addEntity({
	name: "Maze Ball",
	type: "Sphere",
	color: { red: 0, green: 255, blue: 255 },
	dimensions: { x: 0.05, y: 0.05, z: 0.05 },
	position: Vec3.sum(position, {x: 0.0, y: 0.3, z: -2.0 }),   
	gravity: {x: 0.0, y: -0.15, z: 0.0 },   
	visible: true,
	dynamic: true
}));
