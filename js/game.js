var curdir = "";
var parser = {}

parser.parse = function(c) {
    var code = [];
    code = c.split(['.', ',', '#', '?', ':', '"', '(', ')']);
    console.log(code);
}

jQuery(function($, undefined) {
    $('#terminal').terminal(function(command, term) {
        term.echo(parse(command));
    }, {
        greetings: 'Welcome to the CanviOS Alpha!',
        name: 'terminal',
        height: 200,
        prompt: '> '
    });
});
