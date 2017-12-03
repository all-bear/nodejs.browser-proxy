const phantom = require('phantom');

module.exports = async (url, strategy) => {
    const phInstance = await phantom.create();

    try {
        const page = await phInstance.createPage();

        await page.open(url);

        await strategy(page);

        const content = await page.property('content');

        await page.close();

        return content;
    } finally {
        await phInstance.exit();
    }
};