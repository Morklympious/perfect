var m = require('mithril');
var l = require('lodash');
var b = require('benchmark');

global.Benchmark = b; // This is dumb; 

var editors = require('./editor-group.js');
var css     = require('./harness.css');

var work = require('webworkify');


var component = {

  controller: function(options) {
    var ctrl = this,
        worker = work(require('./bench.js'));

    ctrl.suite = new b.Suite();
    ctrl.editors = [];
    ctrl.status = m.prop("");

    ctrl.suite.on('complete', function() {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    });

    ctrl.run = function() {

      ctrl.status('Beginning tests...');  
      
      ctrl.editors.forEach(function(editor, index) {
        ctrl.suite.add('' + index, editor.code.getValue());
      });

      ctrl.suite.run();
    }

  },

  view: function(ctrl, options) {
    return m('div', [
      m(editors, {editors: ctrl.editors}),
      m('div', [
        m('button', { onclick: ctrl.run }, 'Run tests')
      ]),
      m('h1', ctrl.status())
    ]);
  }

}

module.exports = component;