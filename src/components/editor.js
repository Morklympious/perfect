var m      = require('mithril');
var editor = require('codemirror');

var css = require('./editor.css');

// Extra codemirror packages that need to be bundled. 
require('codemirror/mode/javascript/javascript');
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/edit/closebrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/addon/comment/continuecomment");

var component = {
  controller: function(options) {
    var ctrl = this;

    ctrl.setup = function(element, initialized) {
      if(initialized) return;

      ctrl.code = editor(element, {
        lineNumbers: true
      });
    }

    // Add the editor to the harness editor list.
    // There's likely a much better way to do this.  
    options.editors.push(ctrl); 
  },

  view: function(ctrl, options) {
    return m('div', {config: ctrl.setup, class: css.code});
  }
}

module.exports = component;