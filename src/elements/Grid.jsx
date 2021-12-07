import styled from "styled-components";

const Grid = (props) => {
  const {
    children,
    width,
    height,
    padding,
    flex,
    side_flex,
    margin,
    border,
    bg,
    shadow,
    radius,
    min_height,
    borderBottom,
  } = props;
  const styles = {
    width,
    height,
    padding,
    flex,
    side_flex,
    margin,
    border,
    bg,
    shadow,
    radius,
    min_height,
    borderBottom,
  };

  return (
    <>
      <GridBox {...styles}>{children}</GridBox>
    </>
  );
};

Grid.defaultProps = {
  flex: false,
  side_flex: false,
  width: "100%",
  height: "",
  padding: "",
  margin: "",
  border: "",
  bg: "",
  shadow: false,
  radius: "",
  min_height: "",
  borderBottom: false,
};

const GridBox = styled.div`
  border-radius: ${(props) => props.radius};
  ${(props) =>
    props.borderBottom
      ? "border-bottom: 1px solid #ddd; box-shadow: 2px 2px 2px #ddd;"
      : ""}
  ${(props) =>
    props.shadow
      ? "box-shadow:rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
      : ""}
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bg};
  min-height: ${(props) => props.min_height};
  ${(props) =>
    props.flex
      ? "display: flex; align-items: center; justify-content: center; flex-direction: column;"
      : ""}
  ${(props) =>
    props.side_flex
      ? "display: flex; align-items: center; justify-content: space-between;"
      : ""}
`;

export default Grid;
