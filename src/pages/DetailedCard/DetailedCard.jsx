import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { X } from "lucide-react";

function DetailedCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    rentCardsData = [],
    buyCardsData = [],
    sellCardsData = [],
  } = useOutletContext();

  const card = [...rentCardsData, ...buyCardsData, ...sellCardsData].find(
    (item) => item.id === parseInt(id)
  );

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="fixed w-full h-full bg-hover z-20 gap-4 inset-0 flex flex-col items-start p-5">
        <div className="flex w-full justify-between items-center">
          <h1>Card Details for ID: {id}</h1>

          <Button onClick={handleClose} type="circle" className="p-2 ">
            <X color="white" size={22} />
          </Button>
        </div>

        <div className="flex flex-col w-full h-full bg-orange-400">
          <div>{card.title}</div>
        </div>
      </div>
    </>
  );
}

export default DetailedCard;
