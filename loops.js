function forLoop(arr) {
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
      arr.push(`I am 1 strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}
function whileLoop(num) {
	i = num;
	while(i > 0) {
		console.log(i);
		i--;
	}
	return 'done';
}
// function doWhileLoop(array) {
//   function maybeTrue() {
//     return Math.random() >= 0.5;
//   }
//
//   do {
//     array.pop();
//   } while (array.length > -1 && maybeTrue());
//     return array;
// }
// function incrementVariable(i) {
//   i = i + 1;
//   return i;
// }
// function doWhileLoop(int) {
// do {
//   console.log('I run once regardless');
// }
// while (incrementVariable(int) < int)
// }
// doWhileLoop(7);
num = 0;
function doWhileLoop(int) {
do {
  //incrementVariable(int);
  //console.log('I run once regardless');
  if(num != 0) {
  	console.log(`I have run ${num} times`);
  } else if(num === 0) {
  	console.log('I run once regardless');
  }
  //console.log(incrementVariable(int));
  //int++;
  num++;
}
while (num < int)
	//incrementVariable(int);
	//return int;
}
//doWhileLoop(1);
