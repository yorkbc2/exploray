export const filterLabel = filter => {
  let displayedValue = "";
  if (Array.isArray(filter.value)) {
    displayedValue = `${filter.prefix || ""}${
      typeof filter.value[0] === "number"
        ? Math.floor(filter.value[0])
        : filter.value[0]
    } - ${
      typeof filter.value[1] === "number"
        ? Math.floor(filter.value[1])
        : filter.value[1]
    }${filter.postfix || ""}`;
  } else {
    displayedValue = filter.value;
  }
  return displayedValue;
};
