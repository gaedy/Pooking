import Card from "../Card/Card";

function ListCards() {
  return (
    <>
      <div className=" h-full w-full grid grid-cols-2 gap-4">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        
      </div>
    </>
  );
}

export default ListCards;
