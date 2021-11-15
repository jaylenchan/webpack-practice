import './assets/styles/index.css'
import './assets/styles/index.scss'
import avatar from './assets/images/avatar.jpeg'
import testExtensions from './extensions'
import logo from '@/assets/images/logo.png'
import cmath from 'cmath'
import './cmathLoader'
// console.log('chapter1');
document.write('chapter1:devserver')
const img = new Image()
img.src = avatar
document.body.appendChild(img)
// console.log('img=>', avatar);
console.log('testExtensions=>', testExtensions)
console.log('logo=>', logo)
cmath()

console.log('PRODUCTION=>', PRODUCTION)
