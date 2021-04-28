//region Global Imports
import React from "react";
import { render } from "@testing-library/react";
//endregion

//region Local Imports
import { Footer, FOOTER_COMPONENT_KEY } from "~components/layout";
//endregion

describe(FOOTER_COMPONENT_KEY, () => {
    it(`should render as a ${FOOTER_COMPONENT_KEY} by default`, () => {
      const testId = "footer";
      const { getByTestId } = render(<Footer data-testid={testId}/>);
      const container = getByTestId(testId);
    });
});
