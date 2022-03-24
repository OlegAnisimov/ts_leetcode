// function count(array){
//     var names = {};
//     array.forEach(item => {
//         console.log('names[item]', names[item])
//         console.log('(names[item] || 0)', (names[item] || 0))
//         console.log('(names[item] || 0) = 1', (names[item] || 0) + 1)
//         names[item] = (names[item] || 0) + 1;
//         console.log('names', names)
//     });
//     return names;
// }

function count(array){
    return array.reduce( (stack, value) => {
        return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});
}

console.log(count(['a', 'a', 'b', 'b', 'b']));;
