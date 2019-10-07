# About the tool

The tool is made to build the embed templates by the configuration files, manage them in one place so we can maintain and update frequently.  
It's built with Webpack with a goal that make it easy to extend in the future.

# Setup

If you are going to host all instances (assets and config) in one place (eg: Amazon S3). Here is the directory structure you need:

*   **assets**: This directory contains all assets (images,videos,...). For example: **config_v1** is the asset directory of the **config_v1** instance. If you want to store the assets in a different place, that's okay because the tool works well with detached assets.
    *   config_v1
    *   ...
    *   config_vn
*   **custom**: This is the directory contains all your custom styles (css/less) that you want to override the style of the built-in templates.
*   **core.min.js**: This is the core file responsible to build and display the templates.
*   **config_v1.js**: This is an example config file of an instance
*   **index.html**: This is a guide page contains the description about the tool, preview the templates, copy the embed code

# How to embed

Firstly, you need to load the core code in the `head` tag.
```
<!-- If you want to cache the core, use this code -->
<script src="core.min.js"></script>
````
Or
```
<!-- And if you dont want to cache the core -->
    <script type="text/javascript">
    document.write('\x3Cscript type="text/javascript" src="core.min.js?v=' + (new Date()).getTime() + '">\x3C/script>');
    </script>
```

And then, inject your embed code at somewhere on your page.
```
<body>
    <!-- Your embed code go here -->
    <script type="text/javascript">
    document.write('\x3Cscript type="text/javascript" src="config_v1.js?v=' + (new Date()).getTime() + '">\x3C/script>');
    </script>
</body>
```