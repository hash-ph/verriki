import { Component, h, Listen, State } from '@stencil/core';
import { CanvasEntity, CanvasEntityKind } from '../../models/entity';

@Component({
  tag: 'riki-canvas',
  styleUrl: 'riki-canvas.scss',
  shadow: true,
})
export class RikiCanvas {
  width = 640;
  height = 480;

  @State()
  entities: CanvasEntity[] = [
    { id: 'abcdef1', x: 20, y: 30, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef2', x: 22, y: 32, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef3', x: 24, y: 34, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef4', x: 26, y: 36, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef5', x: 28, y: 38, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef6', x: 30, y: 40, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef7', x: 32, y: 42, kind: CanvasEntityKind.NOTES },
    { id: 'abcdef8', x: 34, y: 44, kind: CanvasEntityKind.PIN },
    { id: 'abcdef9', x: 36, y: 46, kind: CanvasEntityKind.PIN },
  ];
  @State()
  canvasOffset = { x: 0, y: 0 };

  focusedEntitiesIds = new Set<string>();
  isDragging = false;
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

    const relevantTags = ['RIKI-CANVAS', 'RIKI-ENTITY'].filter(tag => {
      switch (event.button) {
        case 0:
          return tag === 'RIKI-ENTITY';
        case 1:
          return tag === 'RIKI-CANVAS';
        default:
          return false;
      }
    });
    const target = event
      .composedPath()
      .find((target: HTMLElement) => relevantTags.includes(target.tagName)) as HTMLElement;
    if (!target) {
      return;
    }
    this.isDragging = true;
    // event.preventDefault();

    this.focusedEntitiesIds.clear();
    if (target.tagName === 'RIKI-CANVAS') {
      this.isDraggingCanvas = true;
    }
    if (target.tagName === 'RIKI-ENTITY') {
      this.focusedEntitiesIds.add(this.entities.map(e => e.id).find(id => id === target.id));
    }
  }

  @Listen('mousemove')
  handleMousemove(event: MouseEvent) {
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
    } else {
      this.entities = this.entities.map(e => {
        if (this.focusedEntitiesIds.has(e.id)) {
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
  }

  @Listen('mouseup')
  handleMouseup(_event: MouseEvent) {
    if (!this.isDragging) {
      return;
    }
    this.focusedEntitiesIds.clear();
    this.isDragging = false;
    this.isDraggingCanvas = false;
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
        {this.entities.map(e => (
          <riki-entity
            style={{
              position: 'absolute',
              left: `${e.x}px`,
              top: `${e.y}px`,
            }}
            id={e.id}
            e={e}
          ></riki-entity>
        ))}
      </div>
    );
  }
}
