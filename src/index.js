import './index.css'
console.log('chapter1')
document.write('chapter1:devserver')
import avatar from './avatar.jpeg'

const img = new Image()
img.src = avatar
document.body.appendChild(img)
console.log('img=>', avatar)
