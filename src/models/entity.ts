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

export interface Content {
  content: string;
}
