// TODO: put all the benchmark logic in here and pass it to threads. 
var benchmark = require('benchmark');

module.exports = function (self) {
    self.addEventListener('message',function (ev){
       self.postMessage('yeyeyeyeyeyeyeye');
    });
};