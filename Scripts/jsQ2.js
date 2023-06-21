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
  e.preventDefault();
  
  $(this).parent().parent().remove();
})
$('body').on('click','.deleteAllRow' , function(e)
{
  e.preventDefault();
  if(confirm('آیا تمام دیتا حذف شود؟'))
  $('.row-data').remove();
})
function ShowData(products) {
  console.log(products)
  if (products == null) {
    $('#table').append(`<p>وجود ندارد</p>`)
  } else {
   
   products.forEach(element => {
     $('#Fetch').append(`<div class="row-data" id="${element.id}">
      <div class="row align-items-center">
        <div class="col-11">
          <spn>Title : ${element.title}</spn>
          <p> Description :  ${element.description}</p>
        </div>
        <a href="" data-id="${element.id}" class="col-1 deleteRow">
          <i class="bi bi-trash-fill " style="font-size: 35px;"></i>
        </a>
      </div>
    </div>`)
   });
   
  }
}
  });
  