jQuery(function($, undefined) {
    var curdir = "";

    $('#terminal').terminal(function(command, term) {
        var code = [];
        code = command.split(['.', ',', '#', '?', ':', '"', '(', ')']);
        console.log(code);
    }, {
        greetings: 'Welcome to the CanviOS Alpha!',
        name: 'terminal',
        height: 200,
        prompt: '> '
    });
});
