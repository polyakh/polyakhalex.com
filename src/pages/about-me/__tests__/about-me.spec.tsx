//region Global Imports
import React from "react";
import {render} from "@testing-library/react";
//endregion

//region Local Imports
import AboutMe, { COMPONENT_KEY } from "~pages/about-me";
//endregion

describe(COMPONENT_KEY, () => {
  it(`Should render as a ${COMPONENT_KEY} by default`, () => {
    const testId = COMPONENT_KEY;
    const { getByTestId } = render(<AboutMe data-testid={testId}/>);
    const container = getByTestId(testId);
  });
});
