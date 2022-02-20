export enum CanvasEntityKind {
  NOTES = 'NOTES',
  PIN = 'PIN',
}

export class CanvasEntity {
  id: string;
  kind: CanvasEntityKind;
  x: number;
  y: number;
}

export class CanvasEntityPin extends CanvasEntity {
  pinnedTo?: string;
}

export class CanvasEdge {
  a: string;
  ax: number;
  ay: number;
  z: string;
  zx: number;
  zy: number;
}

export interface Content {
  content: string;
}
