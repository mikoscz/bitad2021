import Route from '@ember/routing/route';

export default class TodosRoute extends Route {
  model() {
    return [
      { title: 'first', done: false },
      { title: 'second', done: false },
      { title: 'third', done: true },
      { title: 'xd', done: false },
    ];
  }
}
