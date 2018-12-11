import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import {Portal} from './Portal';

export class DraggablePortal extends Portal {
  renderPortal({children, ...props}) {
    ReactDOM.render(this.portal, <Draggable {...props}>{children}</Draggable>);
  }
}
