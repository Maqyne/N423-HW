var _db;

export function initFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      pullAll();
    } else {
      _db = "";
    }
  });
}

export function signIn(callback) {
  firebase
    .auth()
    .signInAnonymously()
    .then(function (result) {
      _db = firebase.firestore();
      callback();
    });
}

export function filterGenre(genre) {
  $(".title").html("");

  if (genre === "null") {
    $(".content").html("");
    pullAll();
  } else {
    $(".content").html("");
    $(".title").append(`<h2>${genre} Albums</h2>`);

    _db
      .collection("albums")
      .where("genre", "==", genre)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let album = doc.data();
          $(".content").append(
            `<div class="grid-item"><img src="${album.albumArt}"><p>Album Title: ${album.albumName}</p><p>Artist: ${album.artistName}</p></div>`
          );
        });
      });
  }
}

function pullAll() {
  $(".content").html("");
  $(".title").html("");
  $(".title").append(`<h2>All Albums</h2>`);

  _db
    .collection("albums")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let album = doc.data();
        $(".content").append(
          `<div class="grid-item"><img src="${album.albumArt}"><p>Album Title: ${album.albumName}</p><p>Artist: ${album.artistName}</p></div>`
        );
      });
    });
}
