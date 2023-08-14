export const get = (obj: Record<string, any>, path: string, defaultValue?: any) => {
  const pathParts = path.split(".").filter(Boolean);
  const length = pathParts.length;
  let result = obj;
  let index = 0;

  while (result && index < length) {
    result = result[pathParts[index]];
    index++;
  }

  return index && index === length ? result : defaultValue;
};
