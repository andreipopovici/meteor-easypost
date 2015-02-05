Meteor package wrapper for https://github.com/EasyPost/easypost-node

The Meteor package version will match the original npm package version.

The package loads your Easypost API key from the `EASYPOST_KEY` environment variable.

It's up to you to securely set the environment variable. For testing, you can use:

```
Meteor.startup(function () {
    process.env.EASYPOST_KEY = '<your test API key here>';
});
```

in a server-only .file (i.e. placed in the `server/` folder).
