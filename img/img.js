"ui";

ui.layout(
    <vertical>
        <button id="boot1" align="center">解包img</button>
        <button id="tra1" align="center">打包img</button>
    </vertical>
);


ui.boot1.click(()=>{ 
   shell("cd /data/data/com.MSMBOX/files/project/img/ && sh start.sh", true);
    toast("把img放入到/sdcard/MSMBOX/IMG里面，重命名img.img");
    });


ui.tra1.click(()=>{
    toast("把ramdisk split_img放在IMG文件夹里面，输出文件在IMG文件夹");
   shell("cd /data/data/com.MSMBOX/files/project/img/ && sh start1.sh", true);
    });
