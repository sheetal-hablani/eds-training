/**
 * Decorates the banner block.
 * @param {Element} block The banner block element
 */
export default function decorate(block) {
    // 1. Extract the columns from the raw authored table
    const rows = [...block.children];
    
    // Assume Row 1 is the image and Row 2 is the text content
    const imageRow = rows[0];
    const contentRow = rows[1];
  
    // 2. Process and optimize the background image
    if (imageRow) {
      const imgContainer = imageRow.querySelector('div');
      if (imgContainer) {
        imgContainer.classList.add('banner-image');
        
        // If the banner is at the top of the page (LCP element), force eager loading
        const img = imgContainer.querySelector('img');
        if (img) {
          img.setAttribute('loading', 'eager');
        }
      }
    }
  
    // 3. Process the text content and buttons
    if (contentRow) {
      const textContainer = contentRow.querySelector('div');
      if (textContainer) {
        textContainer.classList.add('banner-content');
  
        // Style any buttons found inside the content area
        const buttons = textContainer.querySelectorAll('a');
        buttons.forEach((button) => {
          // Apply boilerplate button styles if not already applied
          if (!button.classList.contains('button')) {
            button.classList.add('button');
          }
          // Match primary/secondary styling choices if desired
          const up = button.parentElement;
          if (up.tagName === 'EM') {
            button.classList.add('secondary');
          }
        });
      }
    }
  }
  