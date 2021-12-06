import styled from 'styled-components'

const Grid = (props) => {
  const { children, width, height, padding, flex, side_flex } = props
  const styles = { width, height, padding, flex, side_flex }

  return (
    <>
      <GridBox {...styles}>{children}</GridBox>
    </>
  )
}

Grid.defaultProps = {
  flex: false,
  side_flex: false,
  width: '100%',
  height: '',
  padding: '',
}

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  ${(props) =>
    props.flex
      ? 'display: flex; align-items: center; justify-content: center; flex-direction: column;'
      : ''}
  ${(props) =>
    props.side_flex
      ? 'display: flex; align-items: center; justify-content: space-between;'
      : ''}
`

export default Grid
