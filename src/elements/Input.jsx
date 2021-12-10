import styled from "styled-components";
import Grid from "./Grid";
import Text from "./Text";

const Input = (props) => {
  const { label, multiLine, placeholder, _onChange, value } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text>{label}</Text>}
        <TextareaBox
          rows={20}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></TextareaBox>
      </Grid>
    );
  }

  return (
    <>
      <Grid>
        {label && <Text>{label}</Text>}
        <InputBox placeholder={placeholder} onChange={_onChange}></InputBox>
      </Grid>
    </>
  );
};

Input.defaultProps = {
  label: "",
  multiLine: false,
  placeholder: "",
  _onChange: () => {},
  value: "",
};
const InputBox = styled.input`
  border-radius: 5px;
  margin: 10px 0px;
  border: 1px solid #ddc6b6;
  width: 100%;
  padding: 16px 10px;
  box-sizing: border-box;
  background: #fff;
`;
const TextareaBox = styled.textarea`
  border-radius: 5px;
  margin: 10px 0px;
  color: black;
  border: 2px solid #ddc6b6;
  width: 100%;
  padding: 16px 10px;
  resize: none;
  box-sizing: border-box;
`;

export default Input;
