import "../Css/MyList.css";

export const MyListImg = ({ imgPotrait, altPotrait }) => {
  return (
    <>
      <div className="myListContainer myListContainerSmall">
        <img className="myListImg" src={imgPotrait} alt={altPotrait} />
      </div>
    </>
  );
};
