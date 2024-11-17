function GridImages({ card }) {
  const additionalImages = Object.values(card.thumbnails);

  return (
    <div className=" w-full  h-4/6 rounded-2xl">
      <div className="grid grid-cols-3 h-full w-full grid-rows-2 rounded-3xl gap-3">
        <div className="row-span-2 rounded-lg">
          <img
            className="object-cover w-full h-full rounded-lg"
            src={card.thumbnail}
            alt={card.title}
          ></img>
        </div>

        {additionalImages &&
          additionalImages.map((image, index) => (
            <div
              key={index}
              className={`rounded-lg ${index >= 2 ? `col-start-${index}` : ""}`}
            >
              <img
                className="object-cover w-full h-full rounded-lg"
                src={image}
                alt={`${card.title} view ${index + 1}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default GridImages;
