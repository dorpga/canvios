jQuery(function($, undefined) {
    var curdir = "";

    $('#terminal').terminal(function(command, term) {
        term.echo(eval("vm." + command.split(';')[0]));
    }, {
        greetings: 'Welcome to the CanviOS Alpha!',
        name: 'terminal',
        height: 200,
        prompt: '> '
    });
});
