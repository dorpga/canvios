var CONDITION_STATEMENTS = ['=', '!=', '>', '<', '<=', '>='];
jQuery(function($, undefined) {
    var curdir = "";
    $('#terminal').terminal(function(command, term) {
        var c = command.split(';')[0];
        var cmd = c.split(' ')[0]; 
        var args = c.split(' ')[1];
        switch (cmd) {
            case "sys.version":
                term.echo("Version 1.0");
                break;
            case "term.clear":
                term.clear();
                break;
            case "$":
                vars[args.split('=')[0]] = args.split('=')[1];
                break;
            case "?":
                var i = 0;
                while (!CONDITION_STATEMENTS.includes(args[0][i])) {
                }
        }
    }, {
        greetings: 'Welcome to the CanviOS Alpha!',
        name: 'terminal',
        height: 500,
        prompt: '> '
    });
});
