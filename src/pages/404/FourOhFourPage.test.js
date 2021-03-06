import React from "react";
import {mount} from "enzyme";
import "jest-styled-components";

import FourOhFour from ".";

const createFourOhFourProps = (navigateStub = jest.fn(), slug = "/slug") => {
  return {
    navigate: navigateStub,
    data: {
      featuredArticle: {
        fields: {
          slug
        }
      },
      content: {
        title: ""
      }
    }
  };
};

describe("FourOhFour", () => {
  describe("openTrendingArticle", () => {
    it("calls navigate with correct argument", () => {
      const navigateStub = jest.fn();
      const props = createFourOhFourProps(navigateStub);

      const wrapper = mount(<FourOhFour {...props}/>);

      wrapper.instance().openTrendingArticle();

      expect(navigateStub).toHaveBeenCalledWith(props.data.featuredArticle.fields.slug);
    });
  });
});
