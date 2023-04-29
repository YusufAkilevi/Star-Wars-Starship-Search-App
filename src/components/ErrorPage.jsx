import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.css";
export default function ErrorPage() {
  return (
    <div className={classes["error-page"]}>
      <div>
        <h1>Oops!</h1>
        <p>The page NOT found!</p>
      </div>
      <Link className={classes.back} to="/">
        Go Back
      </Link>
    </div>
  );
}
