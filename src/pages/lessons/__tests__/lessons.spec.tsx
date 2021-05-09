//region Global Imports
import React from "react";
import {render} from "@testing-library/react";
//endregion

//region Local Imports
import Lessons, { COMPONENT_KEY } from "~pages/lessons";
//endregion


describe(COMPONENT_KEY, () => {
  it(`Should render as a ${COMPONENT_KEY} by default`, () => {
    const testId = COMPONENT_KEY;
    const { getByTestId } = render(<Lessons data-testid={testId}/>);
    const container = getByTestId(testId);
  });
});
