const phantom = require('phantom');

module.exports = (url, options) => {
    let page = null;
    let phInstance = null;
    let content = '';

    return phantom.create()
        .then(instance => {
            phInstance = instance;

            return instance.createPage();
        })
        .then((p) => {
            page = p;
        })
        .then(() => {
            return page.open(url);
        })
        .then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, options.timeout);
            });
        })
        .then(() => {
            return page.property('content');
        })
        .then((content) => {
            page.close().then(() => {phInstance.exit()});

            return content;
        });
};