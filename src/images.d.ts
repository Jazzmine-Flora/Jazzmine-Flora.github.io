declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "three" {
  export const AdditiveBlending: number;
  export class Scene {
    rotation: { x: number; y: number; z: number };
    add(obj: unknown): void;
  }
  export class PerspectiveCamera {
    aspect: number;
    position: { z: number };
    updateProjectionMatrix(): void;
    constructor(fov: number, aspect: number, near: number, far: number);
  }
  export class WebGLRenderer {
    domElement: HTMLCanvasElement;
    setSize(w: number, h: number): void;
    setPixelRatio(v: number): void;
    render(scene: Scene, camera: PerspectiveCamera): void;
    dispose(): void;
    constructor(opts?: Record<string, unknown>);
  }
  export class BufferGeometry {
    setAttribute(name: string, attr: BufferAttribute | Float32BufferAttribute): void;
    getAttribute(name: string): BufferAttribute;
    dispose(): void;
  }
  export class BufferAttribute {
    array: Float32Array;
    needsUpdate: boolean;
    constructor(array: Float32Array, itemSize: number);
  }
  export class Float32BufferAttribute extends BufferAttribute {
    constructor(array: number[], itemSize: number);
  }
  export class PointsMaterial {
    dispose(): void;
    constructor(opts?: Record<string, unknown>);
  }
  export class Points {
    constructor(geo: BufferGeometry, mat: PointsMaterial);
  }
  export class LineBasicMaterial {
    dispose(): void;
    constructor(opts?: Record<string, unknown>);
  }
  export class LineSegments {
    constructor(geo: BufferGeometry, mat: LineBasicMaterial);
  }
  export class Color {
    r: number; g: number; b: number;
    constructor(hex: string);
  }
}