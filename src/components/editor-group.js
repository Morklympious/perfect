var m      = require('mithril');
var editor = require('./editor.js');

var css = require('./editor-group.css');

var component = {
  controller: function(options) {

  },

  view: function(ctrl, options) {
    return m('div', { config: ctrl.setup, class: css.container }, [
      m(editor, {editors: options.editors}),
      m(editor, {editors: options.editors})
    ]);
  }
}

module.exports = component;