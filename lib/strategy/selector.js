const DELAY = 100;
const MAX_TRIES = 300;

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = (data) => {
  return async (page) => {
    let elementExists = false;
    let i = 0;

    do {
      await timeout(DELAY);

      elementExists = await page.evaluateJavaScript(
        `function() {return !!document.querySelector('${data}');}`
      );

      if (MAX_TRIES <= i++) {
        throw new Error(`Strategy \`selector\` max tries limit for selector ${data}`);
      }
    } while (!elementExists);
  };
};