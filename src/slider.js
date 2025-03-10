document.addEventListener('DOMContentLoaded', function() {
    // Loop over each slider container
    document.querySelectorAll('.slider-container').forEach(container => {
        const slider = container.querySelector('.slider-list');
        const nextBtn = container.querySelector('.slider-next-btn');
        const prevBtn = container.querySelector('.slider-prev-btn');

        // Helper function that reads the edge padding from the container's computed style
        function getEdgePadding() {
          return parseFloat(
            getComputedStyle(container).getPropertyValue('--_layout---edgepadding')
          ) || 0;
        }

        // Gather all thumbnail elements inside the slider
        const thumbnails = Array.from(slider.querySelectorAll('.slider-item'));
        const tolerance = 1; // tolerance in pixels for comparison

        // Next Button: scroll to the next thumbnail's left offset (accounting for edge padding)
        nextBtn.addEventListener('click', function() {
            const currentScroll = slider.scrollLeft;
            let targetOffset = null;
            for (let thumb of thumbnails) {
                const adjustedOffset = thumb.offsetLeft - getEdgePadding();
                if (adjustedOffset > currentScroll + tolerance) {
                    targetOffset = adjustedOffset;
                    break;
                }
            }
            if (targetOffset !== null) {
                slider.scrollTo({ left: targetOffset, behavior: 'smooth' });
            }
        });

        // Prev Button: scroll to the previous thumbnail's left offset (accounting for edge padding)
        prevBtn.addEventListener('click', function() {
            const currentScroll = slider.scrollLeft;
            let targetOffset = null;
            for (let i = thumbnails.length - 1; i >= 0; i--) {
                const adjustedOffset = thumbnails[i].offsetLeft - getEdgePadding();
                if (adjustedOffset < currentScroll - tolerance) {
                    targetOffset = adjustedOffset;
                    break;
                }
            }
            if (targetOffset !== null) {
                slider.scrollTo({ left: targetOffset, behavior: 'smooth' });
            }
        });

        // Click-and-drag functionality for desktop (if window width > 768px)
        if (window.innerWidth > 768) {
            slider.style.cursor = 'grab';

            // Disable native drag behavior on links inside the slider
            slider.querySelectorAll('a').forEach(link => link.setAttribute('draggable', 'false'));

            let isDragging = false;
            const dragThreshold = 5; // pixels
            let startX, startY;
            let pos = { left: slider.scrollLeft, top: slider.scrollTop };

            const mouseDownHandler = function(e) {
                isDragging = false;
                startX = e.clientX;
                startY = e.clientY;
                pos = { left: slider.scrollLeft, top: slider.scrollTop };

                slider.style.cursor = 'grabbing';
                slider.style.userSelect = 'none';

                document.addEventListener('mousemove', mouseMoveHandler);
                document.addEventListener('mouseup', mouseUpHandler);
            };

            const mouseMoveHandler = function(e) {
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;

                if (!isDragging && (Math.abs(dx) > dragThreshold || Math.abs(dy) > dragThreshold)) {
                    isDragging = true;
                }

                slider.scrollLeft = pos.left - dx;
                slider.scrollTop = pos.top - dy;
            };

            const mouseUpHandler = function() {
                slider.style.cursor = 'grab';
                slider.style.removeProperty('user-select');
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);

                if (isDragging) {
                    slider.dataset.dragging = 'true';
                    setTimeout(() => slider.dataset.dragging = 'false', 0);
                }
            };

            // Use capturing so mousedown fires even on links
            slider.addEventListener('mousedown', mouseDownHandler, { capture: true });
            slider.addEventListener('click', function(e) {
                if (slider.dataset.dragging === 'true') {
                    e.preventDefault();
                }
            }, true);
        }
    });
  });