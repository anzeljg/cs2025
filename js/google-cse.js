(function() {
    var host = window.location.hostname;
    if (host.indexOf('github') >= 0) {
        var cx = 'f12f488ebc04248f1'; // github
    } else {
        var cx = 'f12f488ebc04248f1'; // currently equal as github
    }
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();
