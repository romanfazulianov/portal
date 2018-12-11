import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import {Portal} from './Portal';

export class DraggablePortal extends Portal {
  renderer(props, children) {
    return <Draggable {...props}>{children}</Draggable>;
  }
}
