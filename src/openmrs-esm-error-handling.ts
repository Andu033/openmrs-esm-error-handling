<<<<<<< HEAD
import { showToast } from "@openmrs/esm-styleguide";
=======
// import { showToast } from '@openmrs/esm-styleguide'
import "./set-public-path";
>>>>>>> 91d318763f783771cac27579c1bf08f3093b1cbe

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
