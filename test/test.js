var Stime = require('../stime.js');
var assert = require("chai").assert;
//var chai = require('chai');
var mocha  = require('mocha');
var describe = mocha.describe;

describe ('Test constructor toString', function(){
    it('toString test', function(){
        var t = new Stime("1:1:1");
        var res = t.toString();
        assert.strictEqual(res,"1:1:1");
        console.log("hello  " + res);
    });


    it('toString test', function(){
        var t = new Stime("1:0:0");
        var res = t.toString();
        assert.strictEqual(res,"1:0:0");
    });

    it('toString test', function(){
        var t = new Stime("0:0:1");
        var res = t.toString();
        assert.strictEqual(res,"0:0:1");
    });

});

describe ('Test add hour ', function(){
    it('toString test', function(){
        var t = new Stime("1:1:1");
        t.add(2,"hour");
        var res = t.toString();
        assert.strictEqual(res,"3:1:1");
        console.log("hello  " + res);
    });


});