import { Component, h, Listen, State } from '@stencil/core';
import { CanvasEdge, CanvasEntity, CanvasEntityKind, CanvasEntityPin } from '../../models/entity';
import state from './store';

function elementsUnderMouseEvent(event: MouseEvent) {
  const relevantTags = [/*'RIKI-CANVAS', */ 'RIKI-ENTITY'];
  const targets = event
    .composedPath()
    .filter((target: HTMLElement) => relevantTags.includes(target.tagName)) as HTMLElement[];
  return targets;
}

@Component({
  tag: 'riki-canvas',
  styleUrl: 'riki-canvas.scss',
  shadow: true,
})
export class RikiCanvas {
  width = 640;
  height = 480;

  @State()
  pinnables: CanvasEntity[] = [
    { id: 'abcdef1', x: 20, y: 30, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef2', x: 22, y: 32, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef3', x: 24, y: 34, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef4', x: 26, y: 36, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef5', x: 28, y: 38, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef6', x: 30, y: 40, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef7', x: 32, y: 42, kind: CanvasEntityKind.NOTES },
  ];
  @State()
  pins: CanvasEntityPin[] = [
    { id: 'abcdef8', x: 34, y: 44, kind: CanvasEntityKind.PIN },
    { id: 'abcdef9', x: 36, y: 46, kind: CanvasEntityKind.PIN },
    { id: 'abcdef10', x: 36, y: 46, kind: CanvasEntityKind.PIN },
    { id: 'abcdef11', x: 36, y: 46, kind: CanvasEntityKind.PIN },
    { id: 'abcdef12', x: 36, y: 46, kind: CanvasEntityKind.PIN },
    { id: 'abcdef13', x: 36, y: 46, kind: CanvasEntityKind.PIN },
  ];
  @State()
  edges: CanvasEdge[] = [
    { a: 'abcdef8', ax: 0, ay: 0, z: 'abcdef9', zx: 0, zy: 0 },
    { a: 'abcdef8', ax: 0, ay: 0, z: 'abcdef10', zx: 0, zy: 0 },
    { a: 'abcdef8', ax: 0, ay: 0, z: 'abcdef11', zx: 0, zy: 0 },
    { a: 'abcdef11', ax: 0, ay: 0, z: 'abcdef12', zx: 0, zy: 0 },
    { a: 'abcdef12', ax: 0, ay: 0, z: 'abcdef13', zx: 0, zy: 0 },
    { a: 'abcdef9', ax: 0, ay: 0, z: 'abcdef13', zx: 0, zy: 0 },
  ];

  @State()
  canvasOffset = { x: 0, y: 0 };

  focusedEntitiesIds = new Set<string>();

  isDragging = false;
  isDraggingPin = false;
  isDraggingCanvas = false;

  mouseStartOffset = { x: 0, y: 0 };

  @Listen('mousedown', {
    capture: true,
    passive: false,
  })
  handleMousedown(event: MouseEvent) {
    this.mouseStartOffset = {
      x: event.clientX,
      y: event.clientY,
    };

    const target = elementsUnderMouseEvent(event)[0];
    if (!target) {
      return;
    }
    this.isDragging = true;
    event.preventDefault();

    this.focusedEntitiesIds.clear();
    if (target.tagName === 'RIKI-CANVAS') {
      this.isDraggingCanvas = true;
    }
    if (target.tagName === 'RIKI-ENTITY') {
      const pinnable = this.pinnables.map(e => e.id).find(id => id === target.id);
      if (pinnable) {
        this.focusedEntitiesIds.add(pinnable);
      }
      const pin = this.pins.map(e => e.id).find(id => id === target.id);
      if (pin) {
        this.isDraggingPin = true;
        this.focusedEntitiesIds.add(pin);
      }
    }
  }

  @Listen('mousemove')
  handleMousemove(event: MouseEvent) {
    // broadcast elements under mouse
    state.elements = elementsUnderMouseEvent(event).map(e => e.tagName);

    if (!this.isDragging) {
      return;
    }
    const offset = {
      x: event.clientX - this.mouseStartOffset.x,
      y: event.clientY - this.mouseStartOffset.y,
    };
    if (this.isDraggingCanvas) {
      this.canvasOffset = {
        x: this.canvasOffset.x + offset.x,
        y: this.canvasOffset.y + offset.y,
      };
    } else if (this.isDraggingPin) {
      this.pins = this.pins.map(e => {
        if (this.focusedEntitiesIds.has(e.id)) {
          e.x += offset.x;
          e.y += offset.y;
        }
        return e;
      });
    } else {
      this.pinnables = this.pinnables.map(e => {
        if (this.focusedEntitiesIds.has(e.id)) {
          e.x += offset.x;
          e.y += offset.y;
        }
        return e;
      });
      this.pins = this.pins.map(e => {
        if (this.focusedEntitiesIds.has(e.pinnedTo)) {
          e.x += offset.x;
          e.y += offset.y;
        }
        return e;
      });
    }
    this.mouseStartOffset = {
      x: event.clientX,
      y: event.clientY,
    };

    this.refreshEdges();
  }

  @Listen('mouseup')
  handleMouseup(event: MouseEvent) {
    if (!this.isDragging) {
      return;
    }
    if (this.isDraggingPin) {
      const target = elementsUnderMouseEvent(event)[0];
      this.pins = this.pins.map(e => {
        if (!this.focusedEntitiesIds.has(e.id)) {
          return e;
        }
        return { ...e, pinnedTo: target?.id };
      });
    }

    this.focusedEntitiesIds.clear();
    this.isDragging = false;
    this.isDraggingPin = false;
    this.isDraggingCanvas = false;
  }

  private refreshEdges() {
    const entityLookup = this.pins.reduce(
      (prev, curr) => ({
        ...prev,
        [curr.id]: curr,
      }),
      {} as { [id: string]: CanvasEntity },
    );

    this.edges = this.edges.map(e => ({
      ...e,
      ax: entityLookup[e.a].x,
      ay: entityLookup[e.a].y,
      zx: entityLookup[e.z].x,
      zy: entityLookup[e.z].y,
    }));
  }

  render() {
    return (
      <div
        class="riki-canvas"
        style={{
          position: 'absolute',
          left: `${this.canvasOffset.x}px`,
          top: `${this.canvasOffset.y}px`,
        }}
      >
        <div style={{ position: 'absolute' }}>{state.elements}</div>
        {this.pinnables.map(e => (
          <riki-entity
            style={{
              'position': 'absolute',
              'left': `${e.x}px`,
              'top': `${e.y}px`,
              'z-index': '10',
            }}
            id={e.id}
            e={e}
          ></riki-entity>
        ))}
        <svg
          style={{
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'z-index': '90',
            'pointer-events': 'none',
          }}
        >
          {this.edges.map(e => (
            <line x1={e.ax} y1={e.ay} x2={e.zx} y2={e.zy} stroke="black"></line>
          ))}
        </svg>
        {this.pins.map(e => (
          <riki-entity
            style={{
              'position': 'absolute',
              'left': `${e.x}px`,
              'top': `${e.y}px`,
              'z-index': '100',
              'pointer-events': this.isDraggingPin ? 'none' : 'fill',
            }}
            id={e.id}
            e={e}
          ></riki-entity>
        ))}
      </div>
    );
  }
}
