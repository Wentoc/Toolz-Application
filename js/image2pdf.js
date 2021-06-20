function pageLoaded() {
    var loader = document.getElementById("loading");
  
    setInterval(() => {
        loader.style.display = "none";
    }, 10)
  };
  
  function backPressed() { // Function for Back Button Press Event
    window.location.assign('../index.html');
  }
  
  // Creating PDF File from Image
//   window.onload = function(){
//     var imageFile = document.getElementById("imageFile");
  
//   var button = document.getElementById("button");

//   button.onclick = handleImageToPdf

//   function handleImageToPdf(e){
//     //   var imageData = e.toDataURL('image/png');
//       var doc = new jsPdf('p', 'mm');

//     //   doc.addImage(imageData, 'PNG', 10,10);

//       doc.save('image.pdf');

//   }
  
//   imageFile.addEventListener("change",handleImage, false);
  
//   function handleImage(e){
//     console.log(e)
//     var reader = new FileReader();

//     reader.onload = function(event){
//         var image = new Image();

//         image.onload = function(){
          
//         }

//         image.src = event.target.result ;

//     }

//     reader.readAsDataURL(e.target.files[0])
//   }
//   }
  