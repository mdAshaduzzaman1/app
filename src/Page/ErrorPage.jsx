import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Warning! Warning! Warning </h1>
      <h2 className="fw-bolder text-warning">Error 404</h2>
      <p>Sorry, an unexpected error has occurred .</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}