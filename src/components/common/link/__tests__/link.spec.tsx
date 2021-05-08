//region Global Imports
import React from "react";
import {render} from "@testing-library/react";
//endregion

//region Local Imports
import Link, { COMPONENT_KEY } from "~components/common/link";
//endregion

describe(COMPONENT_KEY, () => {
  it(`Should render as a ${COMPONENT_KEY} by default`, () => {
    const testId = COMPONENT_KEY;
    const { getByTestId } = render(<Link data-testid={testId}/>);
    const container = getByTestId(testId);
  });
});
