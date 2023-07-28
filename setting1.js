"ui";

ui.layout(
    <vertical>
        <button id="boot" align="center">清理所有的文件</button>
        <button id="exit" align="center">清理MSMBOX数据</button>
    </vertical>
);



ui.boot.click(()=>{
 shell("rm -rf /sdcard/MSMBOX/*", true);
 toast("成功");
    });




ui.exit.click(()=>{
 shell("rm -rf /data/data/com.MSMBOX/*", true);
    });