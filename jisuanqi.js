<script>
var ar;
 var pr;

 function Rectangle(e, t) {
     var r = Number(e)
     var i = Number(t);

     function n(e, t) {
         return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
     }

     function area() {
         return n(r * i, 2)
     }
     ar = area;

     function perimeter() {
         return n(2 * (r + i), 2)
     }
     pr = perimeter;
 }

 function validate(e, s, kk) {
     if (e == "") {
         s.innerText = kk + "不能为空！"
     } else {
         if (isNaN(e)) {
             s.innerText = "请输入数字！"
         } else {
             if (e <= 0) {
                 s.innerText = kk + "必须大于0"
             }
         }
     }
 }

 window.onload = function() {
     var width = document.getElementById('width');
     var height = document.getElementById("height");
     var tt = document.getElementById("width-validate");
     var ttt = document.getElementById("height-validate");
     var a = document.getElementById("calculate");
     var n = document.getElementById("area");
     var q = document.getElementById("perimeter");
     console.log(a);
     width.onblur = function() {
         k = "宽度";
         validate(width.value, tt, k);
     }
     height.onblur = function() {
         k = "高度";
         validate(height.value, ttt, k);
     }
     a.onclick = function() {
         Rectangle(width.value, height.value);
         n.value = ar();
         q.value = pr();
     }
 };
 </script>