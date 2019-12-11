window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var node = document.getElementById('p-left-o');
    if (top > 100) {
        node.style.display = 'block';
    } else {
        node.style.display = 'none';
    }
}