import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

/*
  You can also export an optional handleDataRequest function that will allow
  you to modify the response of a data request.
  These are the requests that do not render HTML, but rather return the loader
  and action data to the browser once client side hydration has occurred.
*/
// export const handleDataRequest: HandleDataRequestFunction = (
//   response: Response,
//   // same args that get passed to the action or loader that was called
//   { request, params, context }
// ) => {
//   response.headers.set("x-custom", "yay!");
//   return response;
// };
