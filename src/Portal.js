import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Portal extends React.PureComponent {
  static propTypes = {
    node: PropTypes.instanceOf(HTMLElement),
    nodeStyle: PropTypes.object,
    wrapperClassName: PropTypes.string,
    wrapperStyle: PropTypes.object,
  };
  static defaultProps = {
    wrapperClassName: 'portal',
    nodeStyle: {
      position: 'relative',
      height: 0,
    },
    wrapperStyle: {
      position: 'fixed',
      display: 'flex',
      top: 0,
      left: 0,
      zIndex: 1,
    },
  };
  removeOnUnmount = false;

  componentDidMount() {
    if (this.props.node) {
      this.target = this.props.node;
    } else {
      this.target = document.createElement('div');
      Object.assign(this.target.style, this.props.nodeStyle);
      document.body.appendChild(this.target);
      this.removeOnUnmount = true;
    }
    this.renderPortal(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.renderPortal(
        nextProps,
    );
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(
        this.target,
    );
    if (this.removeOnUnmount) {
      document.body.removeChild(
          this.target,
      );
    }
    this.target = void 0;
  }

  renderPortal({
     children,
     node, // eslint-disable-line no-unused-vars
     nodeStyle, // eslint-disable-line no-unused-vars
     ...props
   }) {
    ReactDOM.render(
        this.renderer(props, children),
        this.target,
    );
  }

  renderer(
    {
      wrapperStyle,
      wrapperClassName,
      ...props
    },
    children
  ) {
    return <div
      className={wrapperClassName}
      style={wrapperStyle}
      {...props}
    >
      {children}
    </div>;
  }

  render() {
    return <noscript/>;
  }

}
