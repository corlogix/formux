export function classNames(...names: (string | Record<string, boolean>)[]) {
  const stringNames = names.filter(x => typeof x === "string");
  const objectNames = names.filter(x => typeof x === "object");

  return objectNames.reduce((acc, next) => {
    const innerNames = Object.keys(next).filter((key) => !!next[key]);
    if(innerNames.length) {
      acc.push(...innerNames);
    }
    return acc;
  }, stringNames);
}