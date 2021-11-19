import Route from '@ember/routing/route';

export default class TodosRoute extends Route {
  model() {
    return this.store.findAll('todo');
  }
}
