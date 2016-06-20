var m = require('mithril');
var editors = require('./editor-group.js');
var lodash = require('lodash');
var Benchmark = window.Benchmark = require('benchmark');
var suite =  new Benchmark.Suite();

var css = require('./harness.css')

var component = {
  controller: function(options) {
    var ctrl = this;

    ctrl.editors = [];
    ctrl.suite = suite;

    ctrl.run = function() {
      ctrl.editors.forEach(function(editor, index) {
        ctrl.suite.add('' + index, editor.code.getValue());
      })

      ctrl.suite.on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        console.log(this);
      });

      ctrl.suite.run();
    }

  },

  view: function(ctrl, options) {
    return m('div', [
      m(editors, {editors: ctrl.editors}),
      m('div', [
        m('button', { onclick: ctrl.run }, 'Run tests')
      ])
      
    ]);
  }
}

module.exports = component;