jQuery(function($, undefined) {
    var curdir = "";

    $('#terminal').terminal(function(command, term) {
        var cmd = command.split(' ')[0]; 
        var args = command.split(' ')[1];
        eval("vm." + cmd + "(" + args + ");");
    }, {
        greetings: 'Welcome to the CanviOS Alpha!',
        name: 'terminal',
        height: 200,
        prompt: '> '
    });
});
