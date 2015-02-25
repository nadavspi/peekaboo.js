;(function($) {
    'use strict';

    $.fn.peekaboo = function() {
        return this.each(function() {
            var $this = $(this);
            var $toggle = $this;
            var $next;

            // Use the data attribute if specified
            // Otherwise, toggle the next element
            if ($this.data('toggle-target')) {
                $next = $('#' + $this.data('toggle-target'));
            } else {
                $next = $this.next();
            }

            var toggleAttr = function($element, attribute) {
                var currentValue = $element.attr(attribute) === 'true';
                $element.attr(attribute, !currentValue);
            };

            // Generate an ID for the content if there isn't one
            if (!$next.attr('id')) {
                $next.attr('id', 'peekaboo-' + Math.random().toString(36).substr(2, 9));
            }

            // If the toggle isn't not a button, wrap its contents in a <button>
            // Better than adding button role because we don't lose the element's semantics
            if (this.nodeName.toLowerCase() !== 'button') {
                $this.wrapInner('<button aria-expanded="false" aria-controls="' + $next.attr('id') + '">');
                $toggle = $this.find('button');
            } else {
                $this.attr('aria-expanded', false).attr('aria-controls', $next.attr('id'));
            }

            // Hide the content
            $next.attr('aria-hidden', true);

            $toggle.on('click', function() {
                toggleAttr($toggle, 'aria-expanded');
                toggleAttr($next, 'aria-hidden');
            });

        });
    };

}(window.jQuery));
