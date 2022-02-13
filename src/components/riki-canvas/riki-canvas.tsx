import { Component, h } from '@stencil/core';

@Component({
  tag: 'riki-canvas',
  styleUrl: 'riki-canvas.scss',
  shadow: true,
})
export class RikiCanvas {
  width = 640;
  height = 480;

  render() {
    return <div class="canvas">What's up?</div>;
  }
}
