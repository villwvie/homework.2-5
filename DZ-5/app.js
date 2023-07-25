//dz2
function average(...numb){
  console.log(numb);
}
average(1,2,3,4,5);
// const arr = [1,2,3,4,5]
const getAverage = (...numb) => {
  let sum = 0;
  for (let i = 0; i < numb.length; i += 1) {
    sum += numb[i];
  }
  return sum/numb.length;
};
console.log(getAverage(1,2,3,4,5));




//dz1
function reverse(){
  for (let i of arguments){
    const letters = i.split('');
    let str = '';
    for (let i = letters.length - 1; i >= 0; i--){
      str +=letters[i];
    }
    console.log(str);
  }
}
reverse('фронтед','апрель','урок');
