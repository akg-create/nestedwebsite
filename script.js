document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.subject-btn');
  const topicsLists = document.querySelectorAll('.topics');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const subject = btn.getAttribute('data-subject');

      // Hide all topic lists
      topicsLists.forEach(list => list.style.display = 'none');

      // Show selected subject's topics
      const selectedList = document.getElementById(`${subject}-topics`);
      if (selectedList) {
        selectedList.style.display = 'block';
      }
    });
  });
});
