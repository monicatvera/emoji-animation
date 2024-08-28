document.addEventListener("DOMContentLoaded", function() {
  const paths = document.querySelectorAll("#svg-emojis path");
  let currentIndex = 0;
  function showNextPath() {
    paths.forEach(path => path.style.display = "none");
    paths[currentIndex].style.display = "block";
    
    paths.forEach(path => path.style.opacity = 0);
    paths[currentIndex].style.opacity = 1;
    
    currentIndex = (currentIndex + 1) % paths.length;
  }
  paths.forEach(path => path.style.display = "none");
  paths[0].style.display = "block";
  
  paths.forEach(path => path.style.opacity = 0);
  paths[0].style.opacity = 1;
  
  setInterval(showNextPath, 2000);
});