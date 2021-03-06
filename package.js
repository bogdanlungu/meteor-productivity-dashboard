Package.describe({
  name: 'bogdanlungu:meteor-productivity-dashboard',
  version: '1.0.0',
  summary: 'The dashboard and the functionality for the Productivity App.',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['mongo','minimongo','mongo-livedata','templating'], ['client','server']);
  api.use(['twbs:bootstrap','multiply:iron-router-progress', 'meteorhacks:fast-render'], 'client');
  api.use(['accounts-password', 'iron:router', 'iron:controller', 'ian:accounts-ui-bootstrap-3'], ['client','server']);
  api.use(['bogdanlungu:meteor-notes-errors'], 'client');

  api.addFiles(['common/router.js', 'collections/productivity.js', 'server/publications.js', 'server/permissions.js'],['client','server']);

  api.addFiles([
      'client/layout.html',
      'client/main.html',
      'client/welcome.html',
      'client/welcome.js',
      'client/includes/access_denied.html',
      'client/includes/not_found.html',
      'client/stylesheets/style.css',
      'client/config.js',
      'client/teams.html',
      'client/teams.js'
  ],'client');

  api.export('Teams'); // export the collection
});
