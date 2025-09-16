const FooterGenre = ({
  genreContainer1,
  genre,
  genreTitle,
  genreList,
  genreListItem1,
  genreListItem2,
  genreListItem3,
  genreListItem4,
}) => {
  return (
    <>
      <div className={genreContainer1}>
        <div className={genre}>
          <h4>{genreTitle}</h4>
          <ul className={genreList}>
            <li>
              <a href="">{genreListItem1}</a>
            </li>
            <li>
              <a href="">{genreListItem2}</a>
            </li>
            <li>
              <a href="">{genreListItem3}</a>
            </li>
            <li>
              <a href="">{genreListItem4}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterGenre;
