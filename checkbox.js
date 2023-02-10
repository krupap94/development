function showme() {
  let mobile = document.getElementById("mobile");
  let web = document.getElementById("web");
  let desktop = document.getElementById("desktop");
  let selection = document.getElementById("selection");
  if (mobile.checked == true) {
    selection.value = "mobile";
  }
  if (web.checked == true) {
    selection.value = "web";
  }
  if (desktop.checked == true) {
    selection.value = "desktop";
  } else {
    selection.value = "";
  }
}
function clearme() {
  let mobile = document.getElementById("mobile");
  let web = document.getElementById("web");
  let desktop = document.getElementById("desktop");
  let selection = document.getElementById("selection");
  mobile.checked = "";
  web.checked = "";
  desktop.checked = "";
  selection.value = "";
}
