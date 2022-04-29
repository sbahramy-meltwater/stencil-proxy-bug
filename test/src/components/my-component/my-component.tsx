import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import {Test} from "../classes/test";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The last name
   */
  @Event() test: EventEmitter<Test>;

  private getText(): string {
    this.test.emit({a: "1"});
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()} </div>;
  }
}
