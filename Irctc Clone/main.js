document.addEventListener("DOMContentLoaded", function () {
   const searchBtn = document.getElementById("searchBtn");

   searchBtn.addEventListener("click", function () {
      const fromValue = document.getElementById("from").value;
      const toValue = document.getElementById("to").value;
      const dateValue = document.getElementById("date").value;
      const classValue = document.getElementById("class").value;

      alert(
         `From: ${fromValue}\nTo: ${toValue}\nDate: ${dateValue}\nClass: ${classValue}`
      );
   });
});
