import styled from 'styled-components'

const Text = (props) => {
  const { children, fontSize, color } = props
  const styles = { fontSize, color }
  return (
    <>
      <TextBox {...styles}>{children}</TextBox>
    </>
  )
}

Text.defaultProps = {
  fontSize: '',
  color: false,
}

const TextBox = styled.p`
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.color.primary};
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : ({ theme }) => theme.fontSize.md};
`

export default Text
