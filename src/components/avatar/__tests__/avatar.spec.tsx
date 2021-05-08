//region Global Imports
import React from "react";
import { render } from "@testing-library/react";
//endregion

//region Local Imports
import Avatar, { COMPONENT_KEY } from "~components/avatar";
//endregion

describe(COMPONENT_KEY, () => {
    it(`Should render as a ${COMPONENT_KEY} by default`, () => {
      const testId = COMPONENT_KEY;
      const { getByTestId } = render(<Avatar data-testid={testId}/>);
      const container = getByTestId(testId);
    });
});
