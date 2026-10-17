(() => {
  var copyIcons = document.querySelectorAll(".bi-copy");

  for (i=0; i<copyIcons.length; i++) {
    copyIcons[i].addEventListener('click', handleCopyIconClick);
  }

  function handleCopyIconClick(event) {
    var parent = event.target.parentElement;

    var text = parent.querySelector("a").innerHTML;
    navigator.clipboard.writeText(text);

    var copiedNotif = parent.querySelector("span");
    flashElement(copiedNotif, 1000);
  }

  function flashElement(element, time) {
    element.classList.remove("d-none");
    setTimeout(() => {
      element.classList.add("d-none")
    }, time);
  }
})();