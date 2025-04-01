import styled from "styled-components";

export default function Image({ src, alt, width, height, borderRadius }) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
}

const StyledImage = styled.img`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  border-radius: ${({ borderRadius }) => borderRadius || "0px"};
  object-fit: cover;
`;
