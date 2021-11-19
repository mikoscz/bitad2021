import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TodoComponent extends Component {
  @action
  removeTodo() {
    this.args.todo.destroyRecord();
  }
}
