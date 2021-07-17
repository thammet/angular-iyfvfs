import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <h1>href is Slow!</h1>
  <img src="https://media.giphy.com/media/bMdZu3fG2ZEBO/giphy.gif" />
  `,
})
export class SlowComponent  {
  @Input() name: string;
}
