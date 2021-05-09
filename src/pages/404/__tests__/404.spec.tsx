//region Global Imports
import React from "react";
import {render} from "@testing-library/react";
//endregion

//region Local Imports
import NotFoundPage, { COMPONENT_KEY } from "~pages/404";
//endregion

describe(COMPONENT_KEY, () => {
  it(`Should render as a ${COMPONENT_KEY} by default`, () => {
    const testId = COMPONENT_KEY;
    const { getByTestId } = render(<NotFoundPage data-testid={testId}/>);
    const container = getByTestId(testId);
  });
});
