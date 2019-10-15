require('./css/app.less');

var prefix = '__formBuilder__';
var wrapperClass = prefix+'wrapper';

var MobileDetect = require('mobile-detect');
var md = new MobileDetect(window.navigator.userAgent);

var FormBuilder = {
    build: function(config){
        var template = require("./templates/"+ config.template +".html.twig");

        // Load custom style if have
        if (config.custom_css){
            document.write('<link rel="stylesheet" text="text/css" href="'+ config.custom_css +'"></link>');
        }

        // We need a prefix for each css class we use, so let prefix them
        config.data.prefix = prefix;

        // Pass the MobileDetect object to the twig template, it is very helpful
        // to deal with variant devices
        config.data.md = md;
        
        var wrapper = '<div class="'+ wrapperClass +'">' + template(config.data) + "</div>";

        document.write(wrapper);
    }
}

window.FormBuilder = window.FormBuilder || FormBuilder;