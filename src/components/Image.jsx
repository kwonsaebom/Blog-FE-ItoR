import styled from "styled-components";

export default function Image({ ...props }) {
  return <StyledImage {...props} />;
}

const StyledImage = styled.img`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  border-radius: ${({ $radius }) => $radius || "0px"};
  object-fit: cover;
`;
