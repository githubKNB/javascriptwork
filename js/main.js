// Ref: https://www.html5rocks.com/en/tutorials/file/dndfiles/
window.ready =  checkFileSupport();
function checkFileSupport(){
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
        alert("All the File APIs are supported.");
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
}