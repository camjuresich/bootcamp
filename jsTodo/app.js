let res;
const list = [];
while (res !== 'quit') {
    res = prompt('What would you like to do?')
    if (res === 'new') {
        res = prompt('What Item would you like to add?')
        list.push(res);
    }
    if (res === 'list') {
        console.log('************')
        for (let item of list) {
            
            console.log(item);
        }
        if (!list.length) console.log('nothing on list');
        console.log('************')
    }
    if (res === 'delete') {
        res = prompt('what would you like to delete?')
        list.splice(list.indexOf(res), 1)
    }
}