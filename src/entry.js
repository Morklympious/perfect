var m = require('mithril');
var harness = require('./components/harness.js');

require('./css/_global.css'),
require('./css/_codemirror.css');

var css = require('./css/_app.css');

m.mount(document.getElementById('mount'), {
  view: function() {
    return m(harness);
  }
});
