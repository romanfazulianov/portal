import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Portal extends React.PureComponent {
  componentDidMount () {
    this.target = document.createElement('div');
    document.body.appendChild(this.target);
    this.renderPortal(this.props);
  }

  componentWillReceiveProps (nextProps) {
    this.renderPortal(nextProps);
  }

  componentWillUnmount () {
    ReactDOM.unmountComponentAtNode(this.target);
    document.body.removeChild(this.target);
    this.target = void 0;
  }

  renderPortal ({children, ...props}) {
    ReactDOM.render(
      this.renderer(props, children),
      this.portal
    );
  }

  renderer (props, children) {
    return <div {...props}>{children}</div>;
  }

  render () {
    return <noscript/>;
  }

}
