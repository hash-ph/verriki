export enum CanvasEntityKind {
  NOTES = 'NOTES',
  PIN = 'PIN',
}

export class CanvasEntity {
  id: string;
  kind: CanvasEntityKind;
  x: number;
  y: number;
  focused?: boolean;
}

export class CanvasEdge {
  a: string;
  z: string;
}

export interface Content {
  content: string;
}
