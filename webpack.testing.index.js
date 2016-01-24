/* Entry point for karma tests to increase effieciency of webpack in a karma
 * environment. */
var testsContext = require.context('./src/', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
