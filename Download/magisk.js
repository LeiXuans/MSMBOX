"ui";

ui.layout(
    <vertical>
        <button id="install" align="center">安装Magisk</button>
        <button id="download" align="center">下载Magisk</button>
        <button id="installordownload" align="center">下载并安装Magisk模块</button>
    </vertical>
);

ui.install.click(()=>{
         toast("成功");

    });


ui.download.click(()=>{
     toast("正在下载，可能会卡，是正常的");
var url = "http://www.msmbox.ml/MSMBOX/magisk.zip";
var res = http.get(url);
if(res.statusCode != 200){
    toast("请求失败");
}
files.writeBytes("/sdcard/MSMBOX/Download/install.zip", res.body.bytes());
toast("下载成功");
    shell("echo install /sdcard/MSMBOX/Download/install.zip >/cache/recovery/openrecoveryscript", true);
    shell("su -c reboot recovery", true);
        });


ui.installordownload.click(()=>{
var test = require("magisk1.js")
    });

