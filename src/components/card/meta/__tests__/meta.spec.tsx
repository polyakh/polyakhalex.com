//region Global Imports
import React from "react";
import {render} from "@testing-library/react";
//endregion

//region Local Imports
import Card, { COMPONENT_KEY } from "~components/card";
//endregion

describe(COMPONENT_KEY, () => {
    it(`Should render as a ${COMPONENT_KEY} by default`, () => {
      const testId = COMPONENT_KEY;
      const { getByTestId } = render(<Card data-testid={testId}/>);
      const container = getByTestId(testId);
    });
});
