# Piling.js React Template

This template demonstrates how [piling.js](https://github.com/flekschas/piling.js) can be used within a [React](https://reactjs.org/) app.

To keep things simple, the React app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Live Demo:** https://flekschas.github.io/piling.js-react/

## How To

It's very simple to use Piling.js within a React App. In your React component that should host Piling.js, create a DOM element and subscribe to its reference as follows:

```JSX
import createPilingInterface from './piling-interface.js';

export default function Component() {
  const pilingInitHandler = useCallback((element) => {
    createPilingInterface(element);
  }, []);

  return (
    <div
      className="piling-wrapper"
      ref={pilingInitHandler}
    />
  );
}
```

In `piling-interface.js` you would then implement your piling interface and export a function that initializes the interface using the reference to the dom element.

```javascript
import createPilingJs, { createImageRenderer } from 'piling.js';

const create = async (element) =>
  createPilingJs(element, {
    renderer: createImageRenderer(),
    items: [
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000253413.jpg' },
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000533739.jpg' },
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000314530.jpg' }
    ]
  });

export default create;
```

Details on how to configure the piling interface you can find at https://piling.js.org/docs
