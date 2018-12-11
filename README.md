## Portals (for 15 react and older)

- no styles from a box - use className prop to style a wrapper
- react 15 mostly
- no npm package - copy&paste code - then do whatever is needed
- only peer dependencies - you can see them in `package.json` and install by your own
- provided "as is"

### Contains

- Portal (uses react-dom),
- DraggablePortal (uses react-draggable, inherits Portal),
- ConnectedPortal(see below),
- ConnectedDraggablePortal(see below),
- createConnectedPortal(uses react-redux to create different
connected portals on base of Portal and similar interfaces)

### What for

It's faceless code I wrote again and again among projects.
Now I provide it as protolibrary for fast instantiating.

### What about npm?

Well, npm is too fat nowadays.
and it delivers us some untrusted code... from time to time, but still.
It keeps us far away from tiny well tuned projects.
I think that my code won't be updated or expanded somehow.
To use it "as is" or not - it is your choice.

But I see that by taking this code into your sources
you can tune it,
bundle it or deliver in more suitable for your purposes way.

#### Use it with mind and may the force be with you.
