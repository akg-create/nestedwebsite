document.addEventListener('DOMContentLoaded', () => {
  const subjectButtons = document.querySelectorAll('.subject-btn');
  const topicLists = document.querySelectorAll('.topics');

  // Hide all topic lists initially
  topicLists.forEach(list => list.style.display = 'none');

  // Add click event to each subject button
  subjectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const subject = button.getAttribute('data-subject');

      // Hide all topic lists
      topicLists.forEach(list => list.style.display = 'none');

      // Show the selected topic list
      const selectedList = document.getElementById(`${subject}-topics`);
      if (selectedList) {
        selectedList.style.display = 'block';
      } else {
        console.warn(`No topic list found for subject: ${subject}`);
      }
    });
  });

  console.log('script.js initialized');
});
