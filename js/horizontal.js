// https://github.com/darsain/sly/blob/master/docs/Options.md

jQuery(function($) {
    'use strict';

    (function() {
        var $frame = $('#mainWorksNavigation');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            slidee: null,
            horizontal: true,

            // Item based navigation
            itemNav: 'centered',
            itemSelector: null,
            smart: true,
            activateOn: 'click',
            activateMiddle: false,

            // Scrolling
            scrollSource: $frame,
            scrollBy: 1,
            scrollHijack: 10,
            scrollTrap: true,

            // Dragging
            dragSource: $frame,
            mouseDragging: true,
            touchDragging: true,
            releaseSwing: true,
            swingSpeed: 0.2,
            elasticBounds: true,
            interactive: null,

            // Scrollbar
            scrollBar: $wrap.find('.scrollbar'),
            dragHandle: true,
            dynamicHandle: true,
            clickBar: true,
            syncSpeed: 1.0,

            // Pagesbar
            pagesBar: $wrap.find('.pages'),
            activatePageOn: 'click',
            pageBuilder:
                function (index) {
                    return '<li>' + (index + 1) + '</li>';
                },

            // Navigation buttons
            forward:  null,
            backward: null,
            prev:     null,
            next:     null,
            prevPage: null,
			nextPage: null,

            // Mixed options
            moveBy: 300,
            speed: 300,
            easing: 'easeOutExpo',
            startAt: 0,

        });
    }());

    (function() {
        var $frame = $('#worksNavigation');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            slidee: null,
            horizontal: true,

            // Item based navigation
            itemNav: 'centered',
            itemSelector: null,
            smart: true,
            activateOn: 'click',
            activateMiddle: false,

            // Scrolling
            scrollSource: $frame,
            scrollBy: 1,
            scrollHijack: 10,
            scrollTrap: true,

            // Dragging
            dragSource: $frame,
            mouseDragging: true,
            touchDragging: true,
            releaseSwing: true,
            swingSpeed: 0.2,
            elasticBounds: true,
            interactive: null,

            // Scrollbar
            scrollBar: $wrap.find('.scrollbar'),
            dragHandle: true,
            dynamicHandle: true,
            clickBar: true,
            syncSpeed: 1.0,

            // Pagesbar
            pagesBar: $wrap.find('.pages'),
            activatePageOn: 'click',
            pageBuilder:
                function (index) {
                    return '<li>' + (index + 1) + '</li>';
                },

            // Navigation buttons
            forward:  null,
            backward: null,
            prev:     null,
            next:     null,
            prevPage: null,
			nextPage: null,

            // Mixed options
            moveBy: 300,
            speed: 300,
            easing: 'easeOutExpo',
            startAt: 0,

        });
    }());

    (function() {
        var $frame = $('#articlesNavigation');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            slidee: null,
            horizontal: true,

            // Item based navigation
            itemNav: 'centered',
            itemSelector: null,
            smart: true,
            activateOn: 'click',
            activateMiddle: false,

            // Scrolling
            scrollSource: $frame,
            scrollBy: 1,
            scrollHijack: 10,
            scrollTrap: true,

            // Dragging
            dragSource: $frame,
            mouseDragging: true,
            touchDragging: true,
            releaseSwing: true,
            swingSpeed: 0.2,
            elasticBounds: true,
            interactive: null,

            // Scrollbar
            scrollBar: $wrap.find('.scrollbar'),
            dragHandle: true,
            dynamicHandle: true,
            clickBar: true,
            syncSpeed: 1.0,

            // Pagesbar
            pagesBar: $wrap.find('.pages'),
            activatePageOn: 'click',
            pageBuilder:
                function (index) {
                    return '<li>' + (index + 1) + '</li>';
                },

            // Navigation buttons
            forward:  null,
            backward: null,
            prev:     null,
            next:     null,
            prevPage: null,
			nextPage: null,

            // Mixed options
            moveBy: 300,
            speed: 300,
            easing: 'easeOutExpo',
            startAt: 0,

        });
    }());

});
