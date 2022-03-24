interface StringsCounter {
   [key: string]: number;
}

export function counterUniqueItems(array: string []): StringsCounter{
    let names: StringsCounter = {};
    array.forEach(item => {
        names[item] = (names[item] || 0) + 1;
    });
    return names;
}


// counterUniqueItems(['a', 'a', 'b', 'b', 'b']);
