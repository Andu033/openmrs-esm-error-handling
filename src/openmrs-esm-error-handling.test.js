jest.mock("./openmrs-esm-error-handling");
import showToast from "./openmrs-esm-error-handling";
const { reportError } = jest.requireActual("./openmrs-esm-error-handling");

jest.useFakeTimers();
describe("error handler", () => {
  it("transfrom the input in valid error object if it is not already an error obejct", () => {
    let error;
    try {
      reportError("error");
      jest.runAllTimers();
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(new Error("error"));

    try {
      reportError({ error: "error" });
      jest.runAllTimers();
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(
      new Error('Object thrown as error: {"error":"error"}')
    );

    try {
      reportError(null);
      jest.runAllTimers();
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(new Error("Object thrown as error: null"));

    try {
      reportError(undefined);
      jest.runAllTimers();
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(new Error("'undefined' was thrown as an error"));
  });
});
