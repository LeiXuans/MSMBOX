"ui";

ui.layout(
    <vertical>
        <button id="download" align="center">yc调度--by Matt Yang</button>
        <text textSize="10sp">可以联系作者收录你的Magisk，方法 作者名称，版权名称，你的插件，使用说明，我们会扫描插件源码，不许有格机代码，一律退回！，作者邮箱 3374257533@qq.com</text>        
    </vertical>
);

ui.download.click(()=>{
 toast("正在下载，可能会卡，是正常的");
var url = "http://www.msmbox.ml/MSMBOX/plugins/yc.zip";
var res = http.get(url);
if(res.statusCode != 200){
    toast("请求失败");
}
files.writeBytes("/sdcard/MSMBOX/Download/magisk/yc.zip", res.body.bytes());
toast("下载成功");
 shell("su -c magisk --install-module /sdcard/MSMBOX/magisk/*.zip" , true)
 shell("rm -rf /sdcard/MSMBOX/Download/magisk/*.zip" , true)
 shell("rm -rf /sdcard/MSMBOX/Download*.zip" , true)
 toast("重启手机");
    });


