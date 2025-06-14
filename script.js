// Function to hide topic menus and show only top-level subjects 
function resetHomepageView() {
  const topicsLists = document.querySelectorAll('.topics');
  const subjectButtons = document.querySelectorAll('.subject-btn');

  //Hide all topic lists 
  topicsLists.forEach(list => list.style.display = 'none'); 

  //Show subject buttons 
  subjectButtons.forEach(btn => btn.style.display = 'inline-block');
}

// On page load
document.addEventListener('DOMContentLoaded', () => {

  // Run reset Logic when homepage loads 
  resetHomepageView(); 
  
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
