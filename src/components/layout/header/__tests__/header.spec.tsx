//region Global Imports
import React from "react";
import {render} from "@testing-library/react";
//endregion

//region Local Imports
import { Header, HEADER_COMPONENT_KEY } from "~components/layout";
//endregion

describe(HEADER_COMPONENT_KEY, () => {
    it(`Should render as a ${HEADER_COMPONENT_KEY} by default`, () => {
      const testId = HEADER_COMPONENT_KEY;
      const { getByTestId } = render(<Header data-testid={testId}/>);
      const container = getByTestId(testId);
      expect(container.tagName).toBe("HEADER");
    });
});
