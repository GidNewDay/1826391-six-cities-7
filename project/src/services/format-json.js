function entriesObj(val) {
  if (val instanceof Array) {
    return val.map(entriesObj);
  } else if (val instanceof Object) {
    return Object.fromEntries(
      Object.entries(val).map((v) => [
        v[0].replace(/_+(.)/g, (match, word) => word.toUpperCase()),
        entriesObj(v[1]),
      ]),
    );
  } else {
    return val;
  }
}

export const formatJSON = (data) => data.map((item) => entriesObj(item));
