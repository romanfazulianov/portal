import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Portal extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    renderPortal(nextProps);
  }

  componentDidMount() {
    this.target = document.createElement('div');
    document.body.appendChild(this.target);
    renderPortal(this.props);
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.target);
    document.body.removeChild(this.target);
    this.target = void 0;
  }

  render() {
    return <noscript/>;
  }

  renderPortal({children, ...props}) {
    ReactDOM.render(
      renderer(props, children),
      this.portal
    );
  }

  renderer(props, children) {
    return <div {...props}>children</div>;
  }
}
