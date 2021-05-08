//region Global Imports
import React from "react";
import { render } from "@testing-library/react";
//endregion

//region Local Imports
import Icon, { COMPONENT_KEY } from "~components/common/icon";
//endregion

describe(COMPONENT_KEY, () => {
    it(`Should render as a ${COMPONENT_KEY} by default`, () => {
      const testId = COMPONENT_KEY;
      const { getByTestId } = render(<Icon data-testid={testId}/>);
      const container = getByTestId(testId);
    });
});
