import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artists', function() {
    this.route('index', { path: "/search/:s" })
  });
  this.route('album', { path: "/album/:i" }, function() {
    this.route('track', { path: "/track/:m" });
  });
});

export default Router;
