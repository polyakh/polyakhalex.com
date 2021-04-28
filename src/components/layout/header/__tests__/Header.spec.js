//region Global Imports
import React from "react";
import { render } from "@testing-library/react";
//endregion
//region Local Imports
import { Header, HEADER_COMPONENT_KEY } from "~components/layout";
//endregion
describe(HEADER_COMPONENT_KEY, function () {
    it("should render as a " + HEADER_COMPONENT_KEY + " by default", function () {
        var testId = "header";
        var getByTestId = render(React.createElement(Header, { "data-testid": testId })).getByTestId;
        var container = getByTestId(testId);
        expect(container.tagName).toBe("HEADER");
    });
});
