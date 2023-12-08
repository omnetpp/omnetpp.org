
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.copy-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var content = this.parentElement.querySelector('.content').innerText;
            var elem = document.createElement("textarea");
            document.body.appendChild(elem);
            elem.value = content;
            elem.select();
            document.execCommand("copy");
            document.body.removeChild(elem);
        });
    });
});
