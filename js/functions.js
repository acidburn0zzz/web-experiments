// function to toggle checked state
function toggleChecked() {
  // arguments[0] being the passed switch id or class name
  if($(arguments[0]).is(':checked')){
    $(arguments[0]).prop('checked',false); // uncheck it
  } else {
    $(arguments[0]).prop('checked',true); // check it
  }
}

// stop bits from overriding list row onclick
$(document).ready(function(){
   $("ul.listrow a").click(function(e) {
        e.stopPropagation();
   });
   $("ul.listrow select").click(function(e) {
        e.stopPropagation();
   });
   $("ul.listrow input").click(function(e) {
        e.stopPropagation();
   });
   $("ul.listrow label").click(function(e) {
        e.stopPropagation();
   });
});

function updateLabel() {
  // arguments[0] being the passed id or class name for the label and arguments[1] being the text string
  $(arguments[0]).text(arguments[1]); // uncheck it
}