/**
 * Dynamically sets a deeply nested value in an object.
 * Optionally "bores" a path to it if its undefined.
 * @function
 * @param obj  - The object which contains the value you want to change/set.
 * @param path  - The array representation of path to the value you want to change/set.
 * @param value - The value you want to set it to.
 * @param setrecursively - If true, will set value of non-existing path as well.
 */
export const setInnerValue = (
  obj: Record<string, any>,
  path: Array<any>,
  value: any,
  setrecursively = false
) => {
  let level = 0;

  path.reduce((a: any, b: any) => {
    level++;

    if (
      setrecursively &&
      typeof a[b] === 'undefined' &&
      level !== path.length
    ) {
      a[b] = {};
      return a[b];
    }

    if (level === path.length) {
      a[b] = value;
      return value;
    } else {
      return a[b];
    }
  }, obj);
};
