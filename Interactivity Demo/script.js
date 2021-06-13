window.onload = function () {
    var txt;
    if (
        confirm(
            'Press Ok so that the essential scripts can be loaded and you can enjoy this beutifull website!!!'
        )
    ) {
        location.href = 'https://www.youtube.com/';
        txt = 'Rickrolled';
    } else {
        txt =
            'You have to press ok otherwise the website can not be loaded! Refresh this Webpage and click OK';
    }
    document.getElementById('demo').innerHTML = txt;
};
