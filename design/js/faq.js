document.addEventListener('DOMContentLoaded', function() {
    // Hide text 
    const hideText = document.querySelectorAll('[class^="text_"]');
    const iconMinus = document.querySelectorAll('.icon_plus');
    
    hideText.forEach(text => text.style.display = 'none');
    //Hide Icon_minus
    iconMinus.forEach(icon => {
        if (icon.src.includes('icon-minus')) {
            icon.style.display = 'none';
        }
    });

    const allTexts = document.querySelectorAll('.paragraphs');
    
    allTexts.forEach((paragraph, index) => {
        const i = index + 1; 
        const icons = paragraph.querySelectorAll('.icon_plus');
        const text = document.querySelector(`.text_${i}`);
        
        const plusIcon = icons[0];
        const minusIcon = icons[1];
        
        if (plusIcon && minusIcon && text) {
            plusIcon.addEventListener('click', function() {
                text.style.display = 'flex';
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'flex';
            });
            
            minusIcon.addEventListener('click', function() {
                text.style.display = 'none';
                plusIcon.style.display = 'flex';
                minusIcon.style.display = 'none';
            });
        }
    });
});