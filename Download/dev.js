"ui";

ui.layout(
    <vertical>
        <button id="boot" align="center">OPPO R9S/SK recovery--高通</button>
        <text textSize="10sp">可以联系作者收录你的recovery，发你的twrp和处理器到作者邮箱 3374257533@qq.com</text>
    </vertical>
);



ui.boot.click(()=>{
    toast("正在下载，可能会卡，是正常的");
    var url = "http://www.msmbox.ml/MSMBOX/r9s.img";
var res = http.get(url);
if(res.statusCode != 200){
    toast("请求失败");
}
files.writeBytes("/sdcard/MSMBOX/rec/r9s.img", res.body.bytes());
toast("下载成功");
 shell("dd if=/sdcard/MSMBOX/rec/r9s.img of=/dev/block/bootdevice/by-name/recovery", true);
 toast("刷入成功");
    });

