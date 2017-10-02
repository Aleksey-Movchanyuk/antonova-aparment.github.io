lightGallery(document.getElementById('lightgallery'), {
    thumbnail:true,
    animateThumb: false,
    showThumbByDefault: false
});

// bind to the submit event of our form
var form = document.getElementById('gform');
form.addEventListener("submit", handleFormSubmit, false);