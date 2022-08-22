const content = document.querySelector('.content');
console.log(content.ATTRIBUTE_NODE);
for (let i = 0; i < 16; i++) {
    for (let x = 0; x < 16; x++) {
        const div = document.createElement('div');
        content.appendChild(div);
    }
}