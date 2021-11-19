import EmberRouter from '@ember/routing/router';
import config from 'bitad/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('todos');
});

// { title: "make presentation", done: false }
// { title: "make presentation", done: false }
// { title: "make presentation", done: false }
// { title: "make presentation", done: false }
// { title: "make presentation", done: false }
//
// List all todos
// Add new todo
// Mark as done
// Remove todo
