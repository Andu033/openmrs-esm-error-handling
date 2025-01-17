// import { showToast } from "@openmrs/esm-styleguide";
// import "./set-public-path";

export function handleApiError() {
  return incomingResponseErr => {
    setTimeout(() => {
      throw incomingResponseErr;
    });
  };
}

const showToast = a => {};
window.onerror = function() {
  showToast({ description: "Oops! An unexpected error occurred." });

  return false;
};

window.onunhandledrejection = function(event) {
  showToast({ description: `UNHANDLED PROMISE REJECTION: ${event.reason}` });

  return false;
};

export function reportError(err) {
  const error = ensureErrorObject(err);
  setTimeout(() => {
    throw error;
  });
}

export function createErrorHandler() {
  const outgoingErr = Error();
  return incomingErr => {
    const finalErr = ensureErrorObject(incomingErr);
    finalErr.stack += `\nAsync stacktrace:\n${outgoingErr.stack}`;
    reportError(incomingErr);
  };
}

function ensureErrorObject(thing) {
  let message;
  if (thing instanceof Error) {
    return thing;
  } else if (typeof thing === "object") {
    try {
      message = `Object thrown as error: ${JSON.stringify(thing)}`;
    } catch (e) {
      message = `Object thrown as error with the following properties: ${Object.keys(
        thing
      )}`;
    }
    return Error(message);
  } else if (thing === null) {
    return Error(`'null' was thrown as an error`);
  } else if (thing === undefined) {
    return Error(`'undefined' was thrown as an error`);
  } else {
    return Error(thing.toString());
  }
}
