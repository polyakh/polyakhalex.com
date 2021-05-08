//region Global Imports
import React from "react";
import { render } from "@testing-library/react";
//endregion

//region Local Imports
import Image, { COMPONENT_KEY } from "~components/image";
//endregion

describe(COMPONENT_KEY, () => {
  it(`Should render as a ${COMPONENT_KEY} by default`, () => {
    const testId = COMPONENT_KEY;
    const { getByTestId } = render(<Image data-testid={testId}/>);
    const container = getByTestId(testId);
  });
});
