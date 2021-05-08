//region Global Imports
import React from "react";
import { render } from "@testing-library/react";
//endregion

//region Local Imports
import Tag, { COMPONENT_KEY } from "~components/tag";
//endregion

describe(COMPONENT_KEY, () => {
  it(`Should render as a ${COMPONENT_KEY} by default`, () => {
    const testId = COMPONENT_KEY;
    const { getByTestId } = render(<Tag data-testid={testId}/>);
    const container = getByTestId(testId);
  });
});
