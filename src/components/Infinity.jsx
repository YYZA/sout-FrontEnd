import React from "react";
import _ from "lodash";

const InfinityScroll = (props) => {
  const { children, callNext, is_next, loading } = props;
  const _handleScroll = _.throttle(() => {
    if (loading) {
      return;
    }
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollHeight - innerHeight - scrollTop < 100) {
      callNext();
    }
  }, 300);
  const handleScroll = React.useCallback(_handleScroll, [loading]);

  React.useEffect(() => {
    if (loading) {
      return;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);
  return <React.Fragment>{props.children}</React.Fragment>;
};

InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  is_next: false,
  loading: false,
};

export default InfinityScroll;
