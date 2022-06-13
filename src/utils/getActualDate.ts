export const getDate = () => {
  const date = new Date().toISOString().split("T")[0];
  let futureDay = date
    .split("-")
    .map((item, index) => {
      if (index === 2) {
        item = (+item + 1).toString();
        return item;
      }
      return item;
    })
    .join("-");

  return futureDay;
};
