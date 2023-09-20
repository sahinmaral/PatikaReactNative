const mapObjectAsArray = values => {
  if (values === null) return [];

  const arrayResult = Object.keys(values).map(key => {
    return {id: key, ...values[key]};
  });

  return arrayResult;
};

export default mapObjectAsArray;
