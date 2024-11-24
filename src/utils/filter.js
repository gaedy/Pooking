
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
  return apiData.filter(card => (card.guests || card.bedrooms) >= guests);
};

export const searchFilterByLocation = (location, apiData = []) => {
  if (location.trim() === "") {
    return apiData; // Return all items if the search key is empty
  }

  const locationKey = location.toLowerCase(); // Normalize the search key

  return apiData.filter((card) =>
    card.location.toLowerCase().includes(locationKey)
  );
};


export const searchFilterByRating = (rating, apiData = []) => {
  return apiData
    .filter((card) => card.rate >= rating) // Filter cards with rate >= input rate
    .sort((a, b) => b.rating - a.rating);   // Sort by rate in descending order
};
