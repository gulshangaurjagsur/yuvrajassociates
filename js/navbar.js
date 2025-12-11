function initNavbar() {

    'use strict'

    var siteMenuClone = function() {
        var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
        var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

        if (!jsCloneNavs.length || !siteMobileMenuBody) {
            return; // header abhi load nahi hua
        }

        jsCloneNavs.forEach(nav => {
            var navCloned = nav.cloneNode(true);
            navCloned.setAttribute('class', 'site-nav-wrap');
            siteMobileMenuBody.appendChild(navCloned);
        });

        setTimeout(function(){
            var hasChildrens = document
                .querySelector('.site-mobile-menu')
                ?.querySelectorAll('.has-children') || [];

            var counter = 0;
            hasChildrens.forEach(hasChild => {
                var refEl = hasChild.querySelector('a');

                var newElSpan = document.createElement('span');
                newElSpan.setAttribute('class', 'arrow-collapse collapsed');
                hasChild.insertBefore(newElSpan, refEl);

                var arrowCollapse = hasChild.querySelector('.arrow-collapse');
                arrowCollapse.setAttribute('data-bs-toggle', 'collapse');
                arrowCollapse.setAttribute('data-bs-target', '#collapseItem' + counter);

                var dropdown = hasChild.querySelector('.dropdown');
                dropdown.setAttribute('class', 'collapse');
                dropdown.setAttribute('id', 'collapseItem' + counter);

                counter++;
            });

        }, 500);

        // Mobile menu toggle
        var menuToggle = document.querySelectorAll(".js-menu-toggle");

        menuToggle.forEach(mtoggle => {
            mtoggle.addEventListener("click", (e) => {
                document.body.classList.toggle('offcanvas-menu');
                mtoggle.classList.toggle('active');
            });
        });

        // Outside click close
        var menuElement = document.querySelector(".site-mobile-menu");
        document.addEventListener('click', function(event) {
            var isInside = menuElement?.contains(event.target);
            var isToggle = [...menuToggle].some(btn => btn.contains(event.target));

            if (!isInside && !isToggle) {
                document.body.classList.remove('offcanvas-menu');
                menuToggle.forEach(btn => btn.classList.remove('active'));
            }
        });

    };

    siteMenuClone();
}
