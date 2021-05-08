//region Global Imports
import React from "react";
import { render } from "@testing-library/react";
//endregion

//region Local Imports
import { Footer, FOOTER_COMPONENT_KEY } from "~components/layout";
//endregion

describe(FOOTER_COMPONENT_KEY, () => {
    it(`Should render as a ${FOOTER_COMPONENT_KEY} by default`, () => {
      const testId = FOOTER_COMPONENT_KEY;
      const { getByTestId } = render(<Footer data-testid={testId}/>);
      const container = getByTestId(testId);
    });
});
