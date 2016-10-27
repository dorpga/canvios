jQuery(function($, undefined) {
    var curdir = "";
    var backend = {
        sys: {
            version: "1.0"
        }
    };
    var frontend = {
        sys: {
            version: function() {
                return backend.sys.version;
            }
        }
    };
    
    $('#terminal').terminal(function(command, term) {
        var c = command.split(';')[0];
        var cmd = c.split(' ')[0]; 
        var args = c.split(' ')[1];
        term.echo(eval("frontend." + cmd + "(" + args + ");"));
    }, {
        greetings: 'Welcome to the CanviOS Alpha!',
        name: 'terminal',
        height: 500,
        prompt: '> '
    });
});
