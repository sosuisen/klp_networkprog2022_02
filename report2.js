const execLater = function(func, msec) {
    return setTimeout(func, msec);
};

const say = function(msg) {
    console.log(msg);
};

const timerId = execLater(function(){
    say('Hello, world!')
}, 1000);

console.log(timerId);