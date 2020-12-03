let title = document.getElementById ('title');

setTimeout (() => {
    addStylesTo (title)

}, 1500)

function addStylesTo (node) {
node.style.transform = 1000 ;
    node.textContent = ' Changed by Java Script!'
node.style.textAlign = 'center'
node.style.backgroundColor = 'orange';

}

title.onclick = () => {
    if (title.style.backgroundColor === 'orange') {
title.style.backgroundColor = 'green'
} else  {title.style.backgroundColor = 'orange' }


}