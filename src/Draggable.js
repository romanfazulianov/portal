import * as React from 'react';
import Draggable from 'react-draggable';
import { Portal } from './Portal';
import PropTypes from 'prop-types';

export class DraggablePortal extends Portal {
  static propTypes = {
    ...Portal.propTypes,
    grid: PropTypes.arrayOf(PropTypes.number),
    x: PropTypes.number,
    y: PropTypes.number,
  };

  renderer({grid, x, y, ...props}, children) {
    return (
        <Draggable
          handle={`.${props.wrapperClassName}`}
          defaultPosition={{x: x || 250, y: y || 250}}
          grid={grid || [1, 1]}
        >
          {super.renderer(props, children)}
        </Draggable>
    );
  }
}
