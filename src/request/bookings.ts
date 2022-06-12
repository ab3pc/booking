import serverConfig from "./serverConfig.json";

export const fetchData = async (url: string) => {
  const response = await fetch(`${serverConfig.serviceURL}/${url}`);
  const data = await response.json();

  return data;
};

/// data/bookingList.json`
/// data/tripList.json
