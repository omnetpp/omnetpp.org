(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();

    // This simple form cannot be used, because it does not allow specifying options (onOpenEnd):
    // $('.collapsible').collapsible();
    // Instead:
    var elem = document.querySelector('.collapsible');
    var instance = M.Collapsible.init(elem, {
        onOpenEnd: function (item) {
            if (typeof ga != "undefined") {  // because google analytics is disabled when running outside github pages
                var id = item.getAttribute('id');
                ga('send', 'event', 'model-catalog', 'open', id, null, null);
            }
        }
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
