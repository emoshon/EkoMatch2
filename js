document.addEventListener("DOMContentLoaded", function () {
    let profileButton = document.getElementById("profile-link");
    let profileMenu = document.getElementById("profile-menu");

    profileButton.addEventListener("click", function (event) {
        event.stopPropagation();
        profileMenu.style.display = profileMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!profileMenu.contains(event.target) && event.target !== profileButton) {
            profileMenu.style.display = "none";
        }
    });

    let createAdButton = document.getElementById("create-ad-btn");
    createAdButton.addEventListener("click", function () {
        alert("İlan oluşturma sayfasına yönlendiriliyorsunuz!");
    });
});
