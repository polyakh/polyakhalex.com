//region Global Imports
import React from "react";
import {render} from "@testing-library/react";
//endregion

//region Local Imports
import Layout, { COMPONENT_KEY } from "~components/layout";
//endregion


describe(COMPONENT_KEY, () => {
  it(`Should render as a ${COMPONENT_KEY} by default`, () => {
    const testId = COMPONENT_KEY;
    const { getByTestId } = render(<Layout data-testid={testId}/>);
    const container = getByTestId(testId);
  });
});
