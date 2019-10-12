"use strict";

export const showToast = jest.fn();

beforeEach(() => {
  showToast.mockReset();
});
