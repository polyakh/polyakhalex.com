//region Global Imports
import React from "react";
import { render } from "@testing-library/react";
//endregion

//region Local Imports
import Copyright, { COMPONENT_KEY } from "~components/layout/footer/copyright";
//endregion

describe(COMPONENT_KEY, () => {
    it(`should render as a ${COMPONENT_KEY} by default`, () => {
      const testId = "copyright";
      const { getByTestId } = render(<Copyright name={"Polyakh"} data-testid={testId}/>);
      const container = getByTestId(testId);
    });
});
