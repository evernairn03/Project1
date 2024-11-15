
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  const maxCards = 20;
  let cardCount = document.querySelectorAll('.timeline-card').length;  
  

  function handleScroll() {
    const timelineCards = document.querySelectorAll('.timeline-card');
    const lastCard = timelineCards[timelineCards.length - 1];
  
    if (isInViewport(lastCard) && cardCount < maxCards) {
      addTimelineCard();
    }
  
    timelineCards.forEach(card => {
      if (isInViewport(card)) {
        card.classList.add('visible');
      }
    });
  }

  function addTimelineCard() {
    if (cardCount >= maxCards) return;  
  
    const timeline = document.querySelector('.timeline');
    for (let i = 0; i < 10; i++) {
      if (cardCount >= maxCards) return;  
  
   
      timeline.appendChild(newCard);
      cardCount++;  
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('DOMContentLoaded', handleScroll);

