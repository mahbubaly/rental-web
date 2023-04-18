import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const {status , error} = useRouteError();
  console.error(error);

  return (
    <div id="error-page " className="text-center lg:top-[40%] lg:absolute lg:left-[40%]">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i> <br />
        <i>{status}</i>
      </p>
    </div>
  );
}