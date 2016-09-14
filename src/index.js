require("../build/animate.min");
var each = require("./each");
Noodle = require("noodle");
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
Noodle.setMutator("animateIn",function(animationName,cb){
    var self = this;
    this.$addClass('animated ' + animationName);
    this.$one(animationEnd, function() {
        cb(self);
    });
});
Noodle.setMutator("animateOut",function(animationName,cb){
    var self = this;
    this.$addClass('animated ' + animationName);
    this.$one(animationEnd, function() {
        self.$removeClass('animated ' + animationName);
        cb(self);
    });
});
