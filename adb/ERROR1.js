"ui";

ui.layout(
    <vertical>
        <button id="ava" align="center">格式化userdata数据分区</button>
        <button id="tra" align="center">格式化vendor系统分区</button>
        <button id="magiskit" align="center">格式化system数据分区</button>
        <button id="boot" align="center">格式化boot引导分区</button>
        <button id="recovery" align="center">格式化recovery恢复分区</button>
    </vertical>
);

ui.ava.click(()=>{
    shell("./fastboot erase data", true);
    toast("成功");
    });


ui.tra.click(()=>{
    shell("./fastboot erase vendor", true);
 toast("成功");
    });


ui.magiskit.click(()=>{
 shell("./fastboot erase system", true);
 toast("成功");
    });


ui.boot.click(()=>{
 shell("./fastboot erase boot", true);
 toast("成功");
    });

ui.recovery.click(()=>{
 shell("./fastboot erase recovery", true);
 toast("成功");
    });
