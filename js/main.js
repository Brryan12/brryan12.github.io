onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Valentine\'s Day').split('');
    const subtitle = ('Te quiero mucho mi tesoro <3').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 150); // 150ms delay
      } else {
        index = 0;
        const subtitleElement = document.createElement('div');
        subtitleElement.style.fontSize = 'small';
        titleElement.appendChild(subtitleElement);

        function appendSubtitle() {
          if (index < subtitle.length) {
            subtitleElement.innerHTML += subtitle[index];
            index++;
            setTimeout(appendSubtitle, 150); // 150ms delay
          }
        }

        appendSubtitle();
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};