import styled from 'styled-components'

const Button = (props) => {
  const { children, margin, padding, bg, width, _onClick } = props
  const styles = { margin, padding, bg, width }
  return (
    <>
      <ButtonBox onClick={_onClick} {...styles}>
        {children}
      </ButtonBox>
    </>
  )
}

Button.defaultProps = {
  children: false,
  margin: '',
  padding: '',
  width: '',
  bg: false,
}

const ButtonBox = styled.button`
  border-radius: 5px;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  background: ${(props) =>
    props.bg ? props.bg : ({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  border-radius: 5px;
`

export default Button
