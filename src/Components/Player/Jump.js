const jump = (ballRef, rapier, world) => {    
    if (!ballRef?.current) return;

    const originPivotPoint = ballRef.current.translation();
    originPivotPoint.y -= 0.51;
    const direction = { x: 0, y: -1, z: 0 };
    const ray = new rapier.Ray(originPivotPoint, direction);
    const hit = world.castRay(ray, 10, true);

    if (hit<0.15){ //we jump only if the distance to the ground is less than 0.15
        ballRef.current.applyImpulse({x:0,y:0.5,z:0})

    }

    
};

export default jump;