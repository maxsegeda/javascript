 ///Для этой задачи необходимо создать объект,
 ///содержащий информацию об оценках по каждому 
 ///предмету. Затем нужно написать функцию, которая
 ///будет принимать этот объект в качестве аргумента и рассчитывать 
 ///среднюю оценку ученика.
  const estimates ={
    mathematics : 10,
    informatics : 9,
    biology : 8,
    chemistry : 5,
    history : 7,
  };
  function calculator (estimates) {
let sum = 0;
for (let key in estimates) {
    if (typeof estimates [key] === 'number'){
        sum +=estimates[key]
    }
}
return sum;
};

console.log(calculator (estimates));

  