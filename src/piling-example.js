import createPilingJs, { createImageRenderer } from 'piling.js';

const create = async (element) =>
  createPilingJs(element, {
    renderer: createImageRenderer(),
    // prettier-ignore
    items: [
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000253413.jpg' },
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000533739.jpg' },
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000314530.jpg' },
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000418512.jpg' },
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000454273.jpg' },
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000219654.jpg' },
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000558596.jpg' },
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000392493.jpg' },
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000115639.jpg' },
      { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000228398.jpg' },
    ]
  });

export default create;
