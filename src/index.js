import './assets/styles/index.css'
import './assets/styles/index.scss'
import avatar from './assets/images/avatar.jpeg'
import testExtensions from './extensions'

// console.log('chapter1');
document.write('chapter1:devserver')
const img = new Image()
img.src = avatar
document.body.appendChild(img)
// console.log('img=>', avatar);
console.log('testExtensions=>', testExtensions)
