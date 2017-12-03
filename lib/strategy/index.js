const strategies = {
  'selector': require('./selector'),
  'timeout': require('./timeout'),
  undefined : require('./direct'),
  null : require('./direct'),
  false: require('./direct')
};

module.exports = {
  get(type, meta) {
    if (!strategies[type]) {
      throw new Error(`Invalid strategy ${type}`);
    }

    return strategies[type].call(strategies[type], meta);
  }
};