import Card from "../Card/Card";

function ListCards() {
  return (
    <>
      <div className=" h-full w-full grid lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-6 grid-cols-1 gap-4 flex-wrap">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  );
}

export default ListCards;
