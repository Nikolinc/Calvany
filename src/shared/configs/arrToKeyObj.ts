interface KeyObj {
  [key: string]: string;
}

function ArrToKeyObj(arr: string[]): KeyObj {
  return arr.reduce((acc, key) => {
    acc[key] = '';
    return acc;
  }, {} as KeyObj);
}

export default ArrToKeyObj