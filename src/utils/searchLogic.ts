import { TripItemType } from "./../types/trip";

export interface initialStateTypes {
  originalset: TripItemType[] | [];
  duration: string;
  level: string;
  inputValue: string;
}
export const filteredByInput = (arr: TripItemType[], key: string) => {
  return arr.filter((item) => item.title.toLowerCase().includes(key.toLowerCase()));
};

export const filterByLevel = (arr: TripItemType[], key: string) => {
  if (!key) return arr;
  return arr.filter((item) => item.level === key);
};

export const filterByDuration = (arr: TripItemType[], key: string) => {
  let filteredArr: TripItemType[] | [] = [];
  switch (key) {
    case "0_x_5":
      filteredArr = arr.filter((item) => item.duration < 5);
      break;
    case "5_x_10":
      filteredArr = arr.filter((item) => item.duration < 10);
      break;
    case "10_x":
      filteredArr = arr.filter((item) => item.duration >= 10);
      break;
    default:
      filteredArr = arr;
      break;
  }
  return filteredArr;
};

export const fullSearch = (initilState: initialStateTypes) => {
  let { originalset, duration, level, inputValue } = initilState;
  let filteredArr: TripItemType[] | [] = [];

  filteredArr = filteredByInput(originalset, inputValue);
  filteredArr = filterByLevel(filteredArr, level);
  filteredArr = filterByDuration(filteredArr, duration);
  return filteredArr;
};
