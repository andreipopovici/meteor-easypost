process.env.EASYPOST_KEY = 'cueqNZUb3ldeWTNX7MU3Mel8UXtaAMUi'; // test key from Easypost repo
//Easypost = Npm.require('node-easypost');
Tinytest.add('npm module required', function (test) {
  test.isTrue(Easypost(process.env.EASYPOST_KEY));
});
