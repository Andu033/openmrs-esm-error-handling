import { showToast } from "@openmrs/esm-styleguide";

export function handleApiError() {
  return incomingResponseErr => {
    setTimeout(() => {
      throw incomingResponseErr;
    });
  };
}

window.onerror = function(info) {
  showToast(info);

  return false;
};
