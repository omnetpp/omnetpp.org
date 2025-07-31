(function($){
  $(function(){

    $('.sidenav').sidenav();
    
    // Initialize tabs with OS-specific default selection
    const os = getOperatingSystem();
    
    // Initialize tabs
    $('.tabs').tabs({
      onShow: function() {
        // This ensures all tabs are properly initialized
      }
    });
    
    // Select the appropriate tab based on the user's OS after a small delay
    // to ensure Materialize has fully initialized the tabs
    setTimeout(function() {
      $('.card-tabs').each(function() {
        const tabsElement = $(this).find('.tabs')[0];
        if (!tabsElement) return;
        
        const tabsInstance = M.Tabs.getInstance(tabsElement);
        if (!tabsInstance) return;
        
        // Find the tab with the corresponding OS ID
        const tabLinks = $(this).find('.tab a');
        let found = false;
        
        tabLinks.each(function(index) {
          const href = $(this).attr('href');
          if (href && href.toLowerCase().includes('_' + os)) {
            tabsInstance.select(href.substring(1)); // Remove the '#' from the ID
            found = true;
            return false; // Break the loop
          }
        });
        
        // If no OS-specific tab is found, the first tab will be selected by default
      });
    }, 3000); // Small delay to ensure tabs are initialized
    
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

function getOperatingSystem() {
  const userAgent = navigator.userAgent;
  let os = "core";

  if (userAgent.includes("Win")) {
      os = "windows";
  } else if (userAgent.includes("Mac")) {
      os = "macos";
  } else if (userAgent.includes("X11") || userAgent.includes("Linux")) {
      // 'X11' is often present on Linux systems with a graphical desktop
      // You might want to refine this to distinguish between generic Linux and specific distributions
      os = "linux";
  }

  return os;
}