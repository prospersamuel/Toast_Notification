let toastBox = document.getElementById("toastBox");
let successMsg = `    <img src="icons/sucess.png">
 Successfully Submitted`
let errorMsg = `<img src="icons/error.png"> An error occured please check your internet connection`
let warningMsg = `<img src="icons/warning.png"> Warning please check your information again`


function showToast (msg) {
  let toast =  document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast)
  if(msg.includes("error")){
    toast.classList.add("error");
  }
  if(msg.includes("Warning")){
    toast.classList.add("Warning");
  }
  if(msg.includes("Successfully")){
    toast.classList.add("success");
  }

  setTimeout(() =>{
    toast.remove()
  },5000)
}