import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TodoListComponent extends Component {
  @service store;

  @tracked title = '';

  @action
  addTodo(event) {
    event.preventDefault();

    this.store.createRecord('todo', {
      title: this.title,
      done: false
    });

    this.title = '';
  }

  @action
  setTodoTitle(event) {
    this.title = event.target.value;
  }
}
