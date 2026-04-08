import { Link } from "react-router-dom";

export const Descriptions = () => {
  return (
    <ul>
      <li>
        <Link to="/summer">Summer</Link>
      </li>
      <li>
        <Link to="/autumn">Autumn</Link>
      </li>
      <li>
        <Link to="/winter">Winter</Link>
      </li>
      <li>
        <Link to="/spring">Spring</Link>
      </li>
    </ul>
  );
};
