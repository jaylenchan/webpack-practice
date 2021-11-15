import './assets/styles/index.css'
import './assets/styles/index.scss'
import avatar from './assets/images/avatar.jpeg'

// console.log('chapter1');
document.write('chapter1:devserver')
const img = new Image()
img.src = avatar
document.body.appendChild(img)
// console.log('img=>', avatar);
// const pr = new Promise((res) => setTimeout(() => {
//   res();
// }));
// pr.then((_res) => {
//   // console.log('res=>', _res);
// });
