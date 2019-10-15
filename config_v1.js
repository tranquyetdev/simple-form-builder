/**
 * FormBuilder is a global object that is responsible for build the embed code.
 */
FormBuilder.build({
    /**
     * This is one of the built-in templates we are using for this instance.
     * One instance only can use one template but multi instances can share the same template.
     * If you want more templates, let checkout the core code and create an other one. All the built-in
     * templates locate at src/templates directory.
     */
    template: 'cta-image',
    /**
     * This is the data we will pass to the template. 
     * Each template has a different data structure, so feel free to pass everything you need to the template.
     */
    data: {
        title: "This is an example of CTA image",
        cta_url: 'http://example.com',
        // Note that, for asset url (images, videos,...) you can pass a full url (http:://..) or use relative path
        // if you hosted the assets in the same place with this config file
        img_url: 'https://shorthand-embed.s3.eu-west-2.amazonaws.com/assets/config_v1/image.jpg',
        open_new_tab: true,
        // Configure how the image look (optional, default is "100%")
        // Values should be a string, such as: "100%", "auto", "200px"
        width: "100%",
        height: "100%",
        // For mobile only (optional)
        mobile: {
            cta_url: 'http://example.com',
            img_url: 'https://shorthand-embed.s3.eu-west-2.amazonaws.com/assets/config_v1/image-mobile.jpg',
        },
        // For tablet only (optional)
        tablet: {
            cta_url: 'http://example.com',
            img_url: 'https://shorthand-embed.s3.eu-west-2.amazonaws.com/assets/config_v1/image-mobile.jpg',
        },
    },
    /**
     * This is an optional config. Each template has its own built-in style, but in case of you wanna override something
     * Let create a CSS/LESS file in the 'custom' directory. This file will be loaded dynamically for each instance.
     */
    custom_css: "https://shorthand-embed.s3.eu-west-2.amazonaws.com/custom/config_v1.css"
});