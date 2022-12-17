export default function sortObject(obj, [...anyArray]) {
  const arr = [];
  const exceptions = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push({ key, value: obj[key] });
    }
  }
  anyArray.map((item, index) => {
    exceptions[`${item}`] = index + 1;
    return exceptions;
  });
  arr.sort((a, b) => {
    if (exceptions[a.key] && exceptions[b.key]) {
      return exceptions[a.key] - exceptions[b.key];
    } if (exceptions[a.key]) {
      return -1;
    } if (exceptions[b.key]) {
      return 1;
    }
    return a.key.localeCompare(b.key);
  });
  return arr;
}
