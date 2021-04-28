//region Global Imports
import React from "react";
import { render, screen } from "@testing-library/react";
//endregion

//region Local Imports
import { Title } from "~components/common/typography";
//endregion

describe("Title", () => {
    it("should render as a `Title` by default", () => {
      const testId = "title";
      const fontSize = "1.5em"; // add fz
      const { getByTestId } = render(<Title data-testid={testId}/>);
      const container = getByTestId(testId);
      expect(container).toHaveAttribute("dir");
      expect(container).toHaveStyle({ "font-size": fontSize });
      expect(container.tagName).toBe("H2");
    });
});
