
// filter title
export const searchFilterByTitle = (searchKey, apiData = []) => {
    return apiData.filter((card) =>
      card.title.toLowerCase().includes(searchKey.toLowerCase())
    );
};

// filter rate
export const searchFilterByRate = (rate, apiData = []) => {
  return apiData.filter(card => card.rate >= rate);
};

// filter guests
export const searchFilterByGuests = (guests, apiData = []) => {
  return apiData.filter(card => card.guests >= guests);
};