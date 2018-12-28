function changeLang() {
    var addr = $(location).attr('href');

    if (addr.indexOf('/fr/') > -1) {
        addr = addr.replace('/fr/', '/en/');
    } else if (addr.indexOf('/en/') > -1) {
        addr = addr.replace('/en/', '/fr/');
    }

    window.location = addr;
}