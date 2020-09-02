import image from './assets/image.png'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks'
import {css} from "./utils";

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript!',{
    tag: 'h2',
    styles: css({
      background: 'darkred',
      color: "#fff",
      'text-align': 'center'
    })
  }),
  new ImageBlock(image, {
    styles: 'padding: 2rem 0; display: flex; justify-content: center',
    alt: 'image',
    imageStyles: 'with: 500px; height: auto'
  }),
  new TextColumnsBlock([
    'Приложение на чистом JavaScript без использования библиотек',
    'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс ',
    'JavaScript - это просто, интересно. Научись создавать UI своими руками'
  ], {
    styles: 'padding: 1rem'
  }),
  new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', {
    styles: 'background: darkblue;color:yellow'
  })
]
