//region Global Imports
import React from "react";
import { render } from "@testing-library/react";
//endregion

//region Local Imports
import { COPYRIGHT_COMPONENT_KEY, Copyright } from "~components/layout";
//endregion

describe(COPYRIGHT_COMPONENT_KEY, () => {
    it(`Should render as a ${COPYRIGHT_COMPONENT_KEY} by default`, () => {
      const testId = COPYRIGHT_COMPONENT_KEY;
      const { getByTestId } = render(<Copyright data-testid={testId}/>);
      const container = getByTestId(testId);
    });
});
