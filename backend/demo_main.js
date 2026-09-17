$(document).ready(function () {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Reveal Animation Observer
    const revealOptions = { threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('revealed');
            }
        });
    }, revealOptions);

    $('.reveal').each(function () {
        revealObserver.observe(this);
    });

    // 3. Header transparency scroll logic
    const $header = $('#main-header');
    const isIndexPage = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/index');

    if ($header.length) {
        const noTransparent = $header.data('no-transparent') === true || !isIndexPage;

        $(window).on('scroll', function () {
            if ($header.hasClass('menu-open')) return;
            if (noTransparent) return;

            if ($(window).scrollTop() > 50) {
                $header.removeClass('transparent');
            } else {
                $header.addClass('transparent');
            }
        });

        // Initial check
        if (noTransparent) {
            $header.removeClass('transparent');
        } else if ($(window).scrollTop() > 50) {
            $header.removeClass('transparent');
        }
    }

    // 4. Navigation Dropdowns & Mega Menu
    const $navContainers = $('.nav-dropdown-container');
    const setMenuOpenState = (isOpen) => {
        if (!$header.length) return;
        $header.toggleClass('menu-open', isOpen);

        const noTransparent = $header.data('no-transparent') === true || !isIndexPage;
        console.log(isOpen);
        if (isOpen && !isIndexPage) {
            $header.removeClass('transparent');
        } else if ($(window).scrollTop() <= 50 && !noTransparent) {
            $header.addClass('transparent');
        }
    };

    $navContainers.each(function () {
        const $container = $(this);
        const $trigger = $container.find('.nav-trigger');
        const $menu = $container.find('.mega-menu, .industries-dropdown');
        const $chevron = $container.find('.chevron-icon');

        let timeout;

        function openMenu() {
            clearTimeout(timeout);
            $navContainers.not($container).each(function () {
                $(this).find('.mega-menu, .industries-dropdown')
                    .addClass('pointer-events-none opacity-0 translate-y-2')
                    .removeClass('pointer-events-auto opacity-100 translate-y-0');
                $(this).find('.chevron-icon').removeClass('rotate-180');
            });

            $menu.removeClass('pointer-events-none opacity-0 translate-y-2')
                .addClass('pointer-events-auto opacity-100 translate-y-0');
            $chevron.addClass('rotate-180');
            setMenuOpenState(true);
        }

        function closeMenu() {
            timeout = setTimeout(() => {
                $menu.addClass('pointer-events-none opacity-0 translate-y-2')
                    .removeClass('pointer-events-auto opacity-100 translate-y-0');
                $chevron.removeClass('rotate-180');
                const hasOpenMenu = $('.mega-menu.opacity-100, .industries-dropdown.opacity-100').length > 0;
                setMenuOpenState(hasOpenMenu);
            }, 200);
        }

        $container.on('mouseenter', openMenu);
        $container.on('mouseleave', closeMenu);

        $trigger.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($menu.hasClass('opacity-100')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    });

    // Close menus when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.nav-dropdown-container').length) {
            $('.mega-menu, .industries-dropdown')
                .addClass('pointer-events-none opacity-0 translate-y-2')
                .removeClass('pointer-events-auto opacity-100 translate-y-0');
            $('.chevron-icon').removeClass('rotate-180');
            setMenuOpenState(false);
        }
    });

    // 5. Solutions Mega Menu Hover Logic
    const $solutionItems = $('.solution-item');
    const $previewTitle = $('#mega-preview-text h3');
    const $previewDesc = $('#mega-preview-text p');
    const $previewImg = $('#mega-preview-img');

    if ($solutionItems.length && $previewTitle.length) {
        $solutionItems.on('mouseenter', function () {
            const $item = $(this);
            const title = $item.data('title');
            const desc = $item.data('desc');
            const img = $item.data('img');

            if (title) $previewTitle.text(title);
            if (desc) $previewDesc.text(desc);
            if (img) $previewImg.attr('src', img);

            $solutionItems.removeClass('bg-secondary/50 border-primary text-foreground')
                .addClass('text-muted-foreground border-transparent');
            $item.addClass('bg-secondary/50 border-primary text-foreground')
                .removeClass('text-muted-foreground border-transparent');
        });
    }

    // 6. Mobile Menu Toggle
    let isMobileMenuOpen = false;

    // Use event delegation for the main toggle button
    $(document).on('click', '#mobile-menu-toggle', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const $btn = $(this);
        const $nav = $('#mobile-nav');

        if (!$nav.length) return;

        isMobileMenuOpen = !isMobileMenuOpen;

        if (isMobileMenuOpen) {
            // Remove 'hidden' class to allow slideDown to calculate height properly
            $nav.hide().removeClass('hidden').slideDown(300);
            $btn.html('<svg class="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>');
        } else {
            $nav.slideUp(300, function () {
                $nav.addClass('hidden').css('display', '');
            });
            $btn.html('<svg class="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>');
        }

        // Set header state
        if (typeof setMenuOpenState === 'function') {
            setMenuOpenState(isMobileMenuOpen);
        }
    });

    // Close mobile menu when clicking a standard link (not a submenu toggle)
    $(document).on('click', '#mobile-nav a:not([id$="-toggle"])', function () {
        const $nav = $('#mobile-nav');
        const $btn = $('#mobile-menu-toggle');

        if ($nav.length && isMobileMenuOpen) {
            $nav.slideUp(300, function () {
                $nav.addClass('hidden').css('display', '');
            });
            $btn.html('<svg class="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>');

            isMobileMenuOpen = false;
            if (typeof setMenuOpenState === 'function') {
                setMenuOpenState(false);
            }
        }
    });

    // Mobile Submenu Toggles using event delegation
    $(document).on('click', '#mobile-solutions-toggle', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const $menu = $('#mobile-solutions-menu');
        const $otherMenu = $('#mobile-industries-menu');
        const $icon = $(this).find('i');
        const $otherIcon = $('#mobile-industries-toggle i');

        // Close the other menu if it's open
        if ($otherMenu.is(':visible')) {
            $otherMenu.slideUp(300, function () {
                $(this).addClass('hidden').removeClass('flex');
            });
            $otherIcon.removeClass('rotate-180');
        }

        // Toggle this menu
        if ($menu.is(':hidden') || $menu.hasClass('hidden')) {
            $menu.hide().removeClass('hidden').slideDown(300, function () {
                $(this).addClass('flex').css('display', 'flex');
            });
        } else {
            $menu.slideUp(300, function () {
                $(this).addClass('hidden').removeClass('flex');
            });
        }
        $icon.toggleClass('rotate-180');
    });

    $(document).on('click', '#mobile-industries-toggle', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const $menu = $('#mobile-industries-menu');
        const $otherMenu = $('#mobile-solutions-menu');
        const $icon = $(this).find('i');
        const $otherIcon = $('#mobile-solutions-toggle i');

        // Close the other menu if it's open
        if ($otherMenu.is(':visible')) {
            $otherMenu.slideUp(300, function () {
                $(this).addClass('hidden').removeClass('flex');
            });
            $otherIcon.removeClass('rotate-180');
        }

        // Toggle this menu
        if ($menu.is(':hidden') || $menu.hasClass('hidden')) {
            $menu.hide().removeClass('hidden').slideDown(300, function () {
                $(this).addClass('flex').css('display', 'flex');
            });
        } else {
            $menu.slideUp(300, function () {
                $(this).addClass('hidden').removeClass('flex');
            });
        }
        $icon.toggleClass('rotate-180');
    });
});
