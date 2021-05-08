//region Global Imports
import React from "react";
import { render } from "@testing-library/react";
//endregion

//region Local Imports
import { Profiles, PROFILES_COMPONENT_KEY } from "~components/layout";
//endregion

describe(PROFILES_COMPONENT_KEY, () => {
    it(`Should render as a ${PROFILES_COMPONENT_KEY} by default`, () => {
      const testId = PROFILES_COMPONENT_KEY;
      const { getByTestId } = render(<Profiles data-testid={testId}/>);
      const container = getByTestId(testId);
    });
});
