export const apiBaseUrl = 'https://fe-student-api.herokuapp.com/api/';
export const apiHotelsUrl = `${apiBaseUrl}hotels`;
export const apiPopularHotelsUrl = `${apiBaseUrl}hotels/popular`;

const addParamsToUrl = (urlString, queryParams) => {
  const url = new URL(urlString);

  Object.entries(queryParams).forEach(([key, value]) => {
    const currentValue = url.searchParams.get(key);

    if (currentValue) {
      const values = currentValue.split(',');
      values.push(value);
      url.searchParams.set(key, values.join(','));
    } else {
      url.searchParams.append(key, value);
    }
  });

  return url.toString();
};

export async function getData(url, queryParams = '') {
  const hotels = await fetch(addParamsToUrl(url, queryParams))
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((hotels) => hotels)
    .catch((err) => console.log(err.message));
  return hotels;
}
