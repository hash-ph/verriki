import { Component, h, Prop, State } from '@stencil/core';
import { CanvasEntity } from '../../models/entity';

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
      <div class="riki-entity">
        <code>Debssug: {this.e.id}</code>
      </div>
    );
  }
}
