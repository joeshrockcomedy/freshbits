document.addEventListener('DOMContentLoaded', () => {
    const panelHeaders = document.querySelectorAll('.panel-header');

    panelHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const panelContent = header.nextElementSibling;
            const toggleIcon = header.querySelector('.panel-toggle-icon');

            if (panelContent && panelContent.classList.contains('panel-content')) {
                panelContent.classList.toggle('collapsed');
            }

            if (toggleIcon) {
                toggleIcon.classList.toggle('collapsed');
            }
        });
    });
});
