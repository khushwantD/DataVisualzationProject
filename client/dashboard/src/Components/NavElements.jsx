import { useState, useContext } from "react";
import ContextPage from "../ContextPage";
import Button from "../ReactComponents/Button";
import Link from "../ReactComponents/Link";

function NavElements({ navItem }) {
  const { getFilteredChartData } = useContext(ContextPage);
  
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <Button
      activeClass={showItems ? "active" : ""}
      text={navItem.name}
      onclick={handleClick}
    >
      <div className="link-container">
        {showItems &&
          navItem.options.map((option, i) => (
            <Link
              key={i}
              text={option}
              onclick={() => getFilteredChartData(navItem.name, option)}
            />
          ))}
      </div>
    </Button>
  );
}

export default NavElements;
