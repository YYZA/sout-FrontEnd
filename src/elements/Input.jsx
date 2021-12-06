import styled from 'styled-components'
import Grid from './Grid'
import Text from './Text'

const Input = (props) => {
  const { label, multiLine, placeholder } = props

  if (multiLine) {
    return (
      <Grid>
        {label && <Text>{label}</Text>}
        <TextareaBox rows={10} placeholder={placeholder}></TextareaBox>
      </Grid>
    )
  }

  return (
    <>
      <Grid>
        {label && <Text>{label}</Text>}
        <InputBox placeholder={placeholder}></InputBox>
      </Grid>
    </>
  )
}

Input.defaultProps = {}

const InputBox = styled.input`
  border: 1px solid #000;
  width: 100%;
  padding: 16px 10px;
  box-sizing: border-box;
`
const TextareaBox = styled.textarea`
  border: 3px solid #000;
  width: 100%;
  padding: 16px 10px;
  resize: none;
  box-sizing: border-box;
`

export default Input
