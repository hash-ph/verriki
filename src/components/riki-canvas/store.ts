import { createStore } from '@stencil/store';

const { state } = createStore({
  elements: [] as string[],
});

export default state;
