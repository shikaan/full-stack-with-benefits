import React from "react";
import "jest-styled-components";

import {mountWithTheme} from "/test/utils";
import themeMock from "~theme";

import Card, {CONTEXT} from "./Card.js";

const fixtures = {
  mockCardContet: {
    slug: "slug",
    image: {
      fixed: {
        width: 1,
        height: 1,
        src: "src",
        srcSet: "srcSet",
        base64: "base64",
        tracedSVG: "tracedSVG",
        srcWebp: "srcWebp",
        srcSetWebp: "srcSetWebp"
      }
    },
    title: "title",
    description: "description",
    overline: "overline",
    replaceOnTagNavigate: false,
    tags: ["test", "test-too"],
    context: CONTEXT.FEATURED
  }
};

describe("Card", () => {
  it("renders correctly", () => {
    const wrapper = mountWithTheme(<Card {...fixtures.mockCardContet}/>, themeMock);

    expect(wrapper).toMatchSnapshot();
  });
});
