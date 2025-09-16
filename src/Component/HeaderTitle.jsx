import { useEffect } from "react";

const HeaderTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default HeaderTitle;
