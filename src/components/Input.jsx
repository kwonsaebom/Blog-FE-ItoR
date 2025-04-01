import styled from "styled-components";
import theme from "@styles/theme";

export default function Input({ placeholder, ...props }) {
  return <StyledInput placeholder={placeholder} {...props} />;
}

const StyledInput = styled.input`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  font-size: ${(props) => props.fontSize || "14px"};
  background-color: ${({ $background }) => $background || "transparent"};
  color: ${({ color }) => color || theme.colors.gray50};
  border: 1px solid ${({ color }) => color || theme.colors.gray90};
  padding: 12px 16px;
  border-radius: 4px;
`;
