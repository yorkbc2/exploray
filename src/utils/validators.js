export const minLengthValidator = params => {
  const { min, max } = params,
    maxInteger = 2147483647;
  return value => {
    return value.length >= (min || 0) && value.length <= (max || maxInteger);
  };
};
