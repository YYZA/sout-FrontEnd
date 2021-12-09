import React from 'react'
import _ from 'lodash'
import { useSelector } from 'react-redux'

const InfinityScroll = (props) => {
  const { children, callNext, loading } = props
  const is_next = useSelector((state) => state.post.is_next)
  const _handleScroll = _.throttle(() => {
    if (loading) {
      return
    }
    const { innerHeight } = window
    const { scrollHeight } = document.body
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    if (scrollHeight - innerHeight - scrollTop < 100) {
      if (is_next) {
        callNext()
      }
    }
  }, 300)

  const handleScroll = React.useCallback(_handleScroll, [
    loading,
    _handleScroll,
  ])

  React.useEffect(() => {
    if (loading) {
      return
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, handleScroll])
  return <React.Fragment>{props.children}</React.Fragment>
}

InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  is_next: false,
  loading: false,
}

export default InfinityScroll
