import { Portal } from './Portal';
import { DraggablePortal } from './Draggable';
import { createConnectedPortal } from './createConnectedPortal';

const ConnectedPortal = createConnectedPortal(
  Portal
);
const ConnectedDraggablePortal = createConnectedPortal(
  DraggablePortal
);

export {
  Portal,
  DraggablePortal,
  ConnectedPortal,
  ConnectedDraggablePortal,
  createConnectedPortal
};
