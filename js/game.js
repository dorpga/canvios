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
        var cmd = command.split(' ')[0]; 
        var args = command.split(' ')[1];
        eval("frontend." + cmd + "(" + args + ");");
    }, {
        greetings: 'Welcome to the CanviOS Alpha!',
        name: 'terminal',
        height: 700,
        prompt: '> '
    });
});
