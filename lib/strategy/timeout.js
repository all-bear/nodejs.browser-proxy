module.exports = (data) => {
  return (page) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, parseInt(data));
    });
  };
};