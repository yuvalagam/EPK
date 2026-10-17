(() => {
  var copyIcons = document.querySelectorAll(".bi-copy");

  for (i=0; i<copyIcons.length; i++) {
    let icon = copyIcons[i];
    icon.addEventListener('click', handleCopyIconClick);
    icon.addEventListener('hover', icon.setAttribute("fill", "#212529"))
  }

  function handleCopyIconClick(event) {
    var parent = event.target.parentElement;

    var text = parent.querySelector("a .contact").innerHTML;
    navigator.clipboard.writeText(text);

    var copiedNotif = parent.querySelector(".copy-notif");
    flashElement(copiedNotif, 1000);
  }

  function flashElement(element, time) {
    element.classList.remove("d-none");
    setTimeout(() => {
      element.classList.add("d-none")
    }, time);
  }
})();