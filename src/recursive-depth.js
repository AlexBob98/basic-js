const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// помог на 90% google 
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    let max = 0
    for (let a of arr) {
      if (Array.isArray(a)) {
        max = Math.max(this.calculateDepth(a), max);
      }
    }
    return counter + max;
}
}

module.exports = {
  DepthCalculator
};
