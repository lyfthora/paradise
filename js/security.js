document.addEventListener("DOMContentLoaded", function () {
  function redirectToIndex() {
    window.location.href = "https://rttnparadise.vercel.app";
  }

  document.addEventListener("keydown", function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey &&
        e.shiftKey &&
        ["I", "J", "C", "K"].includes(e.key.toUpperCase())) ||
      (e.metaKey && e.altKey && e.key.toUpperCase() === "I") // For Mac users
    ) {
      e.preventDefault();
      redirectToIndex();
    }
  });

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    redirectToIndex();
  });

  const element = new Image();
  Object.defineProperty(element, "id", {
    get: function () {
      redirectToIndex();
    },
  });
  console.log(element);
});
