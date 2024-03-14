const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach((item, index) => {
  let header = item.querySelector('.accordion-content__header');
  header.addEventListener('click', () => {
    item.classList.toggle('open');

    let answer = item.querySelector('.accordion-content__answer');
    let svg = item.querySelector('.btn__svg');

    if (item.classList.contains('open')) {
      answer.style.height = `${answer.scrollHeight}px`;
      svg.style.transform = 'rotate(-45deg)';
    } else {
      answer.style.height = '0px';
      svg.style.transform = 'rotate(0deg)';
    }
  })
});