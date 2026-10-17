((global) => {
function ajaxUtils() {}

ajaxUtils.sendGetRequest = function (url, responseHandler) {

  let ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open("GET", url);
  ajaxRequest.send();

  ajaxRequest.onreadystatechange = () => {
    if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
      handleResponse(ajaxRequest.response, responseHandler);
    }
  }

}

handleResponse = function(response, responseHandler) {
  responseHandler(response);
}

global.ajaxUtils = ajaxUtils;
})(window);