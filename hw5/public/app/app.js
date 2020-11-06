import * as Model from "../model/model.js";

function initListeners() {
  $("#genre").change(function () {
    console.log(this.value);
    Model.filterGenre(this.value);
  });
}

$(document).ready(function () {
  Model.initFirebase();
  Model.signIn(initListeners);
});
