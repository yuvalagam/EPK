(() => {
  let carouselDiv = document.querySelector(".carousel-inner");
  let imagePaths = [];

  ajaxUtils.sendGetRequest("../images/", (text) => {
    imagePaths = parseImagePaths(text);
    insertImgs(imagePaths);
  });

  function parseImagePaths(text) {
    console.log(text);
    let arr = text
      .match(/<ul\b[^>]*>[\s\S]*?<\/ul>/i)[0]
      .match(/<li\b[\s\S]*?<\/li>/gi)

    arr.shift();
    for (i=0; i<arr.length; i++) {
      arr[i]=arr[i].match(/href=["']([^"']+)["']/i)?.[1] || "";
    }
    console.log(arr);
    return arr;
  }

  function insertImgs(imgPaths) {
    ajaxUtils.sendGetRequest("carouselImgSnippet.html", (text) => {
      var html = ""
      for (i=0; i<imgPaths.length; i++) {
        let element = insertProperty(text, "src", imgPaths[i]);
        if (i === 0) {html += insertProperty(element, "", " active");}
        else {html += insertProperty(element, "", "");}
      }

      carouselDiv.innerHTML = html;
    })
  }

  function insertProperty (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string.replace(new RegExp(propToReplace, "g"), propValue);
    return string;
  };
})()