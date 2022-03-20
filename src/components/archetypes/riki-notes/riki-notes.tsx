import { Component, h, Prop } from '@stencil/core';
import { CanvasEntity } from '../../../models/entity';

@Component({
  tag: 'riki-notes',
  styleUrl: 'riki-notes.scss',
  shadow: true,
})
export class RikiNotes {
  @Prop() e: CanvasEntity;

  render() {
    return (
      <div class="riki-notes">
        <code>Debssusg: {this.e.id}</code>
      </div>
    );
  }
}
