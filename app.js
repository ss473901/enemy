// // alert('Hello!');

// let enemy = 10;

// while(true){
//   command = prompt('敵が現れた【1】攻撃　【2】逃げる');
//   random = Math.floor(Math.random() * 10); //　変数「random」　の中に　”0~9の乱数” を入れる

//   if( command === '1'){
//     enemy = enemy - random;
//     console.log('敵に' + random + 'の攻撃!');

//     if(enemy <= 0){
//       console.log('敵を倒した!')
//       break;
//     }
//     console.log('敵の体力は残り' + enemy);

//   } else if (command === '2'){
//     console.log('うまく逃げれた！');
//     break;
//   }
// }

// console.log('戦闘終了');

let enemy = 10;

while(true){
  command = prompt('エリートトレーナーはポッチャマを出して来た 【1】10万ボルト！【2】にげる');
  random = Math.floor(Math.random() * 10);

  if( command === '1'){
    enemy = enemy - random;
    console.log('敵に' + random + 'の攻撃！');

    if( enemy <= 0){
      console.log('敵を倒した');
      break;
    }
    console.log('敵の体力は残り' + enemy);

    }else if( command === '2'){
      console.log('うまく逃げられた！');
      break;
  }
 }

console.log(戦闘終了);
