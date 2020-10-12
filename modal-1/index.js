(function() {
    var openModal = document.getElementById('openModal');
    var dialog = document.getElementById('modal');
    var closeButton = document.querySelector('.close_btn');
    var sub_btn = document.querySelector('.sub_btn')
    // dialog.returnValue = 'favAnimal';


    // Update button opens a modal dialog
    openModal.addEventListener('click', function() {
      dialog.classList.add('modal')
      dialog.showModal();
      dialog.style.display = '';
    });

    // Form cancel button closes the dialog box
    closeButton.addEventListener('click', function() {
        dialog.close();
        dialog.style.display = 'none';
    });
    sub_btn.addEventListener('click', function() {
        dialog.close();
        dialog.style.display = 'none';
    });
  })();