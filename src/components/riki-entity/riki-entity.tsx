import { Component, h, Prop, State } from '@stencil/core';
import { CanvasEntity, CanvasEntityKind } from '../../models/entity';

@Component({
  tag: 'riki-entity',
  styleUrl: 'riki-entity.scss',
  shadow: true,
})
export class RikiEntity {
  @Prop() e: CanvasEntity;

  @State() debug = '';

  render() {
    return (
      <div class={`riki-entity`}>
        {
          {
            [CanvasEntityKind.NOTES]: <riki-notes e={this.e} />,
            [CanvasEntityKind.PIN]: <riki-pin e={this.e} />,
          }[this.e.kind]
        }
      </div>
    );
  }
}
