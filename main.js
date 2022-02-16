var family=[
    "Rajeev Ranjan",
    "Shubhra Shailee",
    "Akshat Ranjan",
    "Lavanya Ranjan"
  ]
  
  var images=[
    "https://www.pinclipart.com/picdir/middle/561-5612139_dad-clipart-png-download.png",
    "https://flyclipart.com/thumb2/mother-clip-art-849119.png",
    "https://thumbs.dreamstime.com/b/cartoon-boy-standing-clip-art-illustration-vector-isolated-white-background-200577830.jpg",
    "https://toppng.com/uploads/preview/bonecas-meninas-children-clipart-sunday-school-decorations-brothers-and-sisters-cartoo-11563198707dywrymlssn.png"
  ]
  
  var i=0;
  
  function nextslide()
  {
     if(i==3){
       i=0;
     }     
     i++ ;
    document.getElementById("firstp").innerHTML=family[i];
    document.getElementById("image1").src=images[i];
  }