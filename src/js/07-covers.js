export function initCoversSection() {
  const covers = document.querySelector('.covers');
  const animatesEl = document.querySelectorAll('.covers-picture');

  const addAnimationClass = () => {
    animatesEl.forEach(animationEL => {
      animationEL.classList.add('js-animation');
    });
  };
  const removeAnimationClass = () => {
    animatesEl.forEach(animationEL => {
      animationEL.classList.remove('js-animation');
    });
  };

  const followUser = new IntersectionObserver(watch => {
    watch.forEach(youHere => {
      if (youHere.isIntersecting) {
        addAnimationClass();
      } else {
        removeAnimationClass();
      }
    });
  });

  followUser.observe(covers);
}
