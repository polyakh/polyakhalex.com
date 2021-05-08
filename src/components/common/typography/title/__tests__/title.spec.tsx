//region Global Imports
import React from "react";
import { render, screen } from "@testing-library/react";
//endregion

//region Local Imports
import Title,{ COMPONENT_KEY } from "~components/common/typography/title";
//endregion

describe(COMPONENT_KEY, () => {
    it(`Should render as a ${COMPONENT_KEY} by default`, () => {
      const testId = COMPONENT_KEY;
      const fontSize = "1.5em"; // add fz
      const { getByTestId } = render(<Title data-testid={testId}/>);
      const container = getByTestId(testId);
      expect(container).toHaveAttribute("dir");
      expect(container).toHaveStyle({ "font-size": fontSize });
      expect(container.tagName).toBe("H2");
    });
});
