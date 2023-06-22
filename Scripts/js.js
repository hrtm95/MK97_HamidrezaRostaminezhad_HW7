var baseAddres= "https://dummyjson.com/products/"
var tbl = `
    <p colspan="7" class="text-center"> اطلاعاتی یافت نشد</p>
`

var head = `<table ">
<thead >
  <tr>
    <th>ردیف</th>
    <th>نام</th>
    <th>توضیحات</th>
    <th>قیمت</th>
    <th>برند</th>
    <th>دسته بندی</th>
    <th>تصویر</th>
  </tr>
</thead>
<tbody>`
 var footer =`</tbody>
 </table>`


try{
function SerchProduct(){
$('#table').html("");
$.ajax({
   type: "GET",
   url: `${baseAddres}`+ $('#idChek').val(),
   data: {
          
         },
   dataType: "JSON",

   success: function (response) {
       ShowData(response);
   },
   error: function(request, status, error)
   {

     ShowError(request.statusText);
   },
 });

}
}catch(err){
    alert(err);
}

function ShowError(request)
{

$('#table').append(tbl)
}

function ShowData(products){
 
   $('#table').append(head+`
           <tr>
             <td>${products.id}</td>
             <td>${products.title}</td>
             <td>${products.description}</td>
             <td>${products.price}</td>
             <td>${products.Apple}</td>
             <td>${products.category}</td>
             <td><img src="${products.thumbnail}" width="150px"></img></td>
           </tr>
`+footer)
}
