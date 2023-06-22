$(document).ready(function (){
    var baseAddres = "https://6347eca8db76843976b5e973.mockapi.io/todos"

  $.ajax({
    type: "get",
    url: `${baseAddres}`,
    data: {

    },
    dataType: "JSON",
    success: function (response) {
      ShowData(response);
    },
    fail: function (resp) {
      console.log(resp);
    },
  });

$('body').on('click','.deleteRow' , function(e)
{  
  $(this).parent().parent().remove();
})
$('body').on('click','#deleteAll' , function(e)
{
  if(confirm('Do you want delete all data'))
  $('.data').remove();
})
function ShowData(products) {
  console.log(products)
  if (products == null) {
    $('#table').append(`<p>Note data found</p>`)
  } else {
   
   products.forEach(element => {
     $('#downloadData').append(`<div class="data" id="${element.id}">
      <div class="row align-items-center">
        <div class="col-11">
          <span class="boldtxt">Title : ${element.title}</span>
          <p> <span class="boldtxt">Description : </span> ${element.description}</p>
        </div>
        <button data-id="${element.id}" class="btn col-1 deleteRow">
          <i class="bi bi-trash-fill icon"></i>
        </button>
      </div>
    </div>`)
   });
   
  }
}
  });
  