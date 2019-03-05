/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
      let a = preferences[i] - 1;
      let b = preferences[a] - 1;
      let c = preferences[b] - 1;
      if (a == i || a == b || c == b) continue;
      if (c == i) {
          count++;
      }
  }
  return count / 3;
};
