import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button(({theme, context}) => `
  font-family: ${theme.typography.primaryFont.fontFamily};
  font-size: ${theme.typography.baseFontSize.multiply(0.875)};
  font-weight: 700;
  color: ${theme.color.white};
  
  background-color: ${theme.color[context]};
  border:none;
  padding: ${theme.typography.baseFontSize.multiply(.5)} ${theme.typography.baseFontSize.multiply(1.5)};
  border-radius: 2px;
`)

const Button = (props) => <StyledButton {...props} />

Button.propTypes = {
  context: PropTypes.oneOf(['coffee'])
};

export default Button;