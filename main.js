var boys_array=[];
function a() {
    var local_array=[];
    var x =1;
    while (x < 5 ){
  var name=document.getElementById("name_of_the_student_" +x ).value;
  boys_array.push(name);
x++;
    }
    var a = boys_array.length;

    var y =0;
    while (y < a ){
  local_array.push("<h4>name:"+boys_array[y]+" </h4>")
y++;
    }
    document.getElementById("display_name_with_commas").innerHTML=local_array;
    document.getElementById("display_name_without_commas").innerHTML=local_array.join("  ");
    document.getElementById("sumbit_button").style.display="inline-block";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
       boys_array.sort();
       var local_array=[];
       var a = boys_array.length;

    var y =0;
    while (y < a ){
  local_array.push("<h4>name:"+boys_array[y]+" </h4>")
y++;
    }
    document.getElementById("display_name_with_commas").innerHTML=local_array;
    document.getElementById("display_name_without_commas").innerHTML=local_array.join("  ");
}