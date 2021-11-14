
const choice = (items) => (
    items[Math.floor(Math.random()*items.length)];
);

const remove = (items, item) => {
    let idx = items.findIndex(i => i === item)
    items.splice(idx, 1);
    return items;
}

export {choice, remove}