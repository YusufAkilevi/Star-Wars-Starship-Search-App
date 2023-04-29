import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, the starship couldn't be found.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
