/**
 * Smoothly scroll to an element with the given ID
 * @param {string} id - The ID of the element to scroll to
 * @param {number} [offset=-80] - Optional offset from the top of the element (default: -80)
 */
export const scrollTo = (id, offset = -80) => {
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = offset;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Smoothly scroll to the top of the page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
