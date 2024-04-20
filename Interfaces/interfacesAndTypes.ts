interface PointInterface2D {
    x: number;
    y: number;
}

interface PointInterface3D extends PointInterface2D {
    z: number;
}

class ExampleInterface implements PointInterface3D {
    x = 0;
    y = 0;
    z = 0;
}

// Similarity

type PointType2D = {
    x: number;
    y: number;
}

type PointType3D = PointType2D & {
    z: number;
}

class ExmapleType implements PointType3D {
    x = 0;
    y = 0;
    z = 0;
}