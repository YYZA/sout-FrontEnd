import styled from 'styled-components'

const Button = (props) => {
  const { children, margin, padding, bg, _onClick } = props
  const styles = { margin, padding, bg }
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
  bg: false,
}

const ButtonBox = styled.button`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) =>
    props.bg ? props.bg : ({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.fontSize.md};
`

export default Button
