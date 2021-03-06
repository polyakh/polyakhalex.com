//region Global Imports
import React from "react";
import { render, getRoles } from "@testing-library/react";
//endregion

//region Local Imports
import SEO, { COMPONENT_KEY } from "~components/SEO";
//endregion

describe(COMPONENT_KEY, () => {
  it(`Should render as a ${COMPONENT_KEY} by default`, () => {
    const testId = COMPONENT_KEY;
    const { getByTestId } = render(<SEO data-testid={testId}/>);
    const container = getByTestId(testId);
  });
});
