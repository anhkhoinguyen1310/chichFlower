window.onload = () => {
    document.getElementById('startAnimations').addEventListener('click', function() {
      // Clone the animated container
      const flowers = document.querySelector('.flowers');
      const clonedFlowers = flowers.cloneNode(true);
  
      // Replace the original container with the clone
      flowers.parentNode.replaceChild(clonedFlowers, flowers);
  
      // Force reflow/repaint on the clone
      clonedFlowers.offsetHeight;
  
      // Re-apply the 'not-loaded' class if needed
      document.body.classList.add("not-loaded");
  
      // You may need to adjust this, depending on how you want to handle the "not-loaded" state.
      setTimeout(() => {
        document.body.classList.remove("not-loaded");
      }, 100); // Short delay to ensure the class toggling triggers the animation
    });
  };
  