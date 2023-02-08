// Adding of boxes function below
var Num = 1;
function AddButton() {
  if (Num == 10) {
    return alert(
      "Boxes are out of stoke !!. You Cannot Add More Than Ten Boxes."
    );
  }
  Num++;
  var AddContent = document.createElement("p");
  document.getElementById("textbox").appendChild(AddContent);
  // let Div1 = document.getElementById("textbox");
  AddContent.innerHTML += `<div class=" text-center mt-2" id="textbox">
  <input type="text" placeholder="Add an Box / Remove an Box " style="font-weight:bolder;" class="text-center w-75"/>
   <button id="Remove-Box" onclick="RemoveButton(this)" style="font-weight:bolder;font-size:15px;">Remove</button>
</div>`;
}

// Removing of boxes function below
function RemoveButton(Discard) {
  Num--;
  Discard.parentNode.parentNode.removeChild(Discard.parentNode);
}
