//时钟js
function get_time() {
  //获取系统时间
  var t_time=new Date();
  var t_hour=t_time.getHours();
  var t_minute=t_time.getMinutes();
  var t_second=t_time.getSeconds();
  var c_h=t_hour/12*360; /*12小时一圈*/
  var c_m=t_minute/60*360;
  var c_s=t_second/60*360;
  s1.innerHTML+=`
    @keyframes turn0{
      0%{
        transform:rotate(${c_h}deg);
      }
      100%{
        transform:rotate(${c_h+360}deg);
      }
    }
    @keyframes turn1{
      0%{
        transform:rotate(${c_m}deg);
      }
      100%{
        transform:rotate(${c_m+360}deg);
      }
    }
    @keyframes turn2{
      0%{
        transform:rotate(${c_s}deg);
      }
      100%{
        transform:rotate(${c_s+360}deg);
      }
    }`
}