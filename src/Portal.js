import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Portal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.target = document.createElement('div');
    document.body.appendChild(this.target);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    renderPortal(nextProps);
  }

  componentDidMount() {
    renderPortal(this.props);
  }

  componentWillUnmount() {
    unrenderPortal();
    document.body.removeChild(this.target);
    this.target = void 0;
  }

  render() {
    return <noscript/>;
  }

  renderPortal({children, ...props}) {
    ReactDOM.render(this.portal, <div {...props}>children</div>);
  }

  unrenderPortal() {
    ReactDOM.unmountComponentAtNode(this.target);
  }
}
