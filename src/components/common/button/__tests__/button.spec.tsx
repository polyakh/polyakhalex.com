//region Global Imports
import React from "react";
import { render } from "@testing-library/react";
//endregion

//region Local Imports
import Button, { COMPONENT_KEY } from "~components/common/button";
//endregion

describe(COMPONENT_KEY, () => {
  it(`Should render as a ${COMPONENT_KEY} by default`, () => {
    const testId = COMPONENT_KEY;
    const { getByTestId } = render(<Button data-testid={testId}/>);
    const container = getByTestId(testId);
  });
});
