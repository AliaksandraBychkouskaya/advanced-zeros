function getZerosCount(number, base) {
  // your implementation
  let count = 0;
  let numberForChanges;
  let arrOfPrimitives = getPrimitives(base);
  let baseReal = Math.max.apply(null, arrOfPrimitives);
  let numberOfMax = 0;
  for (let i = 0; i < arrOfPrimitives.length; i++) {
    if (arrOfPrimitives[i] == baseReal) {
      numberOfMax++;
    }
  }
  do {
    numberForChanges = number;
    while (numberForChanges % baseReal === 0) {
      numberForChanges /= baseReal;
      count++;
    }
    number -= 1;
  }
  while (number > 0);

  return Math.floor(count / numberOfMax);
}

function getPrimitives(number) {
  let num = number;
  let arrOfPrimitives = [];
  let primitive = getFirstPrimitive(num);

  while (primitive !== num) {
    arrOfPrimitives.push(primitive);
    num /= primitive;
    primitive = getFirstPrimitive(num);

  }
  arrOfPrimitives.push(num);

  return arrOfPrimitives;
}

function getFirstPrimitive(number) {
  for (let i = 2; i <= number / 2; i > 2 ? (i = i + 2) : ++i) {
    if (number % i === 0) {
      return i;
    }
  }
  return number;
}

module.exports = getZerosCount;
