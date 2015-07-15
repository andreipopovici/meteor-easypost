Package.describe({
  name: 'adyus:easypost',
  version: '2.0.7',
  // Brief, one-line summary of the package.
  summary: 'Meteor version of node-easypost',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/andreipopovici/meteor-easypost.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.export('Easypost', 'server');
  api.addFiles('adyus:easypost.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('adyus:easypost');
  api.addFiles('adyus:easypost-tests.js');
});

Npm.depends({
  'node-easypost': "2.0.7"
});
