window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var node = document.getElementById('p-left-o');
    if (top > 100) {//500就是滚动条滚动到的位置，大于500才显示
        node.style.display = 'block';
    } else {
        node.style.display = 'none';
    }
}