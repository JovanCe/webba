/**
 * Created by JovanCe on 11/28/16.
 */

requirejs.config({
    urlArgs: "now="+Date.now(),
    paths: {
        tests: "test"
    }
});
tests = [
    "tests/cpu"
];
requirejs(["jquery"],function($){
    mocha.setup('bdd');
    requirejs(tests, function(){
        mocha.run();
    });
});