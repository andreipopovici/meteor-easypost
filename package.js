Package.describe({
  name: 'adyus:easypost',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor version of node-easypost',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('adyus:easypost.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('adyus:easypost');
  api.addFiles('adyus:easypost-tests.js');
});

Npm.depends({
  node-easypost: "~2.0"
});
