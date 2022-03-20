import { Component, h, Prop } from '@stencil/core';
import { CanvasEntity } from '../../../models/entity';

@Component({
  tag: 'riki-pin',
  styleUrl: 'riki-pin.scss',
  shadow: true,
})
export class RikiPin {
  @Prop() e: CanvasEntity;

  render() {
    return <div class="riki-pin"></div>;
  }
}
