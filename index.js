const deleteSpan = document.querySelectorAll('.list__item_action');

const handleDeleteClick = e => {
  // create li with proper html
  const li = document.createElement('li');
  li.classList.add('question');
  li.innerHTML = `
  <p class="question__text">Are you sure you want to remove this item?</p>
  <button class="question__button question__button_no">NO</button>
  <button class="question__button question__button_yes">YES</button>
  `;

  // if it is a last li show question before it
  if (e.currentTarget.parentNode.nextElementSibling === null) {
    e.currentTarget.parentNode.before(li);
    document.querySelector('.question').style.margin = '5px auto 0px auto';

    const liQuestionText = document.querySelector('.question__text');
    liQuestionText.style.borderBottomLeftRadius = '0px';
    liQuestionText.style.borderTopLeftRadius = '10px';

    const liQuestionYesButton = document.querySelector('.question__button_yes');
    liQuestionYesButton.style.borderBottomRightRadius = '0px';
    liQuestionYesButton.style.borderTopRightRadius = '10px';
  } else {
    // otherwise after it
    e.currentTarget.parentNode.after(li);
  }

  e.currentTarget.style.display = 'none';

  const noButtons = document.querySelectorAll('.question__button_no');
  const yesButtons = document.querySelectorAll('.question__button_yes');

  noButtons.forEach(button =>
    button.addEventListener('click', handleNoButtonsClick)
  );

  yesButtons.forEach(button =>
    button.addEventListener('click', handleYesButtonsClick)
  );
};

deleteSpan.forEach(span => span.addEventListener('click', handleDeleteClick));

const handleNoButtonsClick = e => {
  if (e.currentTarget.parentNode.nextSibling.lastChild !== null) {
    e.currentTarget.parentNode.nextSibling.lastChild.previousElementSibling.style.display =
      'flex';
  }

  e.target.parentNode.previousElementSibling.lastChild.previousSibling.style.display =
    'flex';

  e.target.parentNode.classList.add('fadeOut');
  setTimeout(() => {
    e.target.parentNode.remove();
  }, 810);
};

const handleYesButtonsClick = e => {
  if (e.currentTarget.parentNode.nextSibling.lastChild !== null) {
    e.target.parentNode.classList.add('fadeOut');
    e.currentTarget.parentNode.nextSibling.lastChild.parentNode.classList.add(
      'fadeOut'
    );

    setTimeout(() => {
      e.target.parentNode.nextSibling.lastChild.parentNode.remove();
      e.target.parentNode.remove();
    }, 800);
  } else {
    e.target.parentNode.previousElementSibling.classList.add('fadeOut');
    e.target.parentNode.classList.add('fadeOut');

    setTimeout(() => {
      e.target.parentNode.previousElementSibling.remove();
      e.target.parentNode.remove();
    }, 810);
  }
};
