//region Global Imports
import React from "react";
import {render} from "@testing-library/react";
//endregion

//region Local Imports
import Link from "~components/common/link";
//endregion


describe("Link", () => {
    it("should render as a `Link` by default", () => {
      const testId = "link";
      const { getByTestId } = render(<Link data-testid={testId}/>);
    });
});
