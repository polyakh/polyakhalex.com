//region Global Imports
import React from "react";
import {render} from "@testing-library/react";
//endregion

//region Local Imports
import { Links, LINKS_COMPONENT_KEY } from "~components/layout";
//endregion

describe(LINKS_COMPONENT_KEY, () => {
    it(`should render as a ${LINKS_COMPONENT_KEY} by default`, () => {
      const testId = "links";
      const { getByTestId } = render(<Links data-testid={testId}/>);
      const container = getByTestId(testId);
    });
});
