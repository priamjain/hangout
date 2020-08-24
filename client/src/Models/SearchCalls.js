const SearchCalls = {};

SearchCalls.getSearch = function getSearch(access_token,query) {
  const url = `https://api.napster.com/v2.2/search?lang=en_US&query=${query}&isStreamableOnly=true`;
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(result => result.json())
    .then(result => result.search)
    .catch(err => Error(err, "Loading Searchs"));
};


export default SearchCalls;