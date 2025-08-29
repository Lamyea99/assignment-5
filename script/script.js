//heart icon count
  const numbers =  document.getElementsByClassName("icon");
  
  for(let number of numbers){
  number.addEventListener("click", function () {
    const heartNumber = document.getElementById("heart-number").innerText;
    const heartIcon = Number(heartNumber) + 1;
    document.getElementById("heart-number").innerText = heartIcon;}
  )
  }
//copy
const copying = document.getElementsByClassName("copy");
for(let copied of copying){
copied.addEventListener("click",function(){
    alert("copied");
    const copyNumber = document.getElementById("copy-points").innerText;
    const copiedNumber = Number(copyNumber) + 1;
    document.getElementById("copy-points").innerText = copiedNumber;

})

}






  //call numbers
 

 const hotlines = document.getElementsByClassName("emergency-hotline");
 for(const hotline of hotlines){
 hotline.addEventListener("click",function (event){
    if(event.target.className.includes("call-numbers")){
        const targetPoint = event.target;
      const serviceName = targetPoint.parentNode.parentNode.children[2].innerText; 
      const service =targetPoint.parentNode.parentNode.children[1].innerText; 
     const serviceNumber= targetPoint.parentNode.parentNode.children[3].innerText;
 const  callPoints =document.getElementById("call-points").innerText;
    if(callPoints <= 20){
        alert("Not enough coins");
        return;
    }
    const remainingPoints = Number(callPoints) - 20 ;
    document.getElementById("call-points").innerText = remainingPoints;
      alert( "Name:"+serviceName+ ","+"Number:" + serviceNumber );
      let now = new Date();
     now.toLocaleTimeString();
       const newCart = document.createElement("div");
       newCart.innerHTML =`<div class="bg-[#FAFAFA] rounded-xl p-3 flex flex-col sm:flex-row justify-between items-center my-3">
  <div>
    <h1 class="text-[18px] text-black font-semibold">${service}</h1>
    <h3 class="text-gray-500">${serviceNumber}</h3>
  </div>
  ${now}
</div>`;
     document.getElementById("remove").appendChild(newCart);
   
   }
 })
}
//remove history
document.getElementById("clear-button").addEventListener("click",function(){
 const removeContainer = document.getElementById("remove");
  removeContainer.innerHTML = " ";
})


