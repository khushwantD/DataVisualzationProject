
import filters from "../../filters";
import NavElements from "./NavElements";

function Navbar() {

  return (
    <div className="nav">
      <div className="logo-container">
        <a className="nav-logo" href="/">
          Data Visualization
        </a>
      </div>
      <div className="nav-links">
        <h1>Chart Filters</h1>
        {filters.map((filter, index) => (
          <NavElements key={index} navItem={filter} />
        ))}
      </div>
    </div>
  );
}

export default Navbar