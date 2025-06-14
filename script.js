function resetHomepageView() {
  const topicsLists = document.querySelectorAll('.topics');
  const subjectButtons = document.querySelectorAll('.subject-btn');

  // Hide all topic lists
  topicsLists.forEach(list => list.style.display = 'none');

  // Show subject buttons (optional, in case you hide them elsewhere)
  subjectButtons.forEach(btn => btn.style.display = 'inline-block');
}

document.addEventListener('DOMContentLoaded', () => {
  // Reset view on load
  resetHomepageView();

  const buttons = document.querySelectorAll('.subject-btn');
  const topicsLists = document.querySelectorAll('.topics');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const subject = btn.getAttribute('data-subject');

      // Hide all topics
      topicsLists.forEach(list => list.style.display = 'none');

      // Show selected
      const selectedList = document.getElementById(`${subject}-topics`);
      if (selectedList) {
        selectedList.style.display = 'block';
      }
    });
  });
});
