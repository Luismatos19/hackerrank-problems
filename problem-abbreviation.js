const dataProcess = (input) =>  {
    var lines = input.split("\n");

    function readLine(){
        var num = 0;
        this.nxLn = () =>{
            return num++;
        }
    }

    var bts = new readLine();

    var line = parseInt(lines[bts.nxLn()]);

    var isLowerCase = function(value){
        if(value.charCodeAt(0)>96){
            return true;
        } else {
            return false;    
        }
    }

    var containsUpperCase = function(value){
        for(var i=0;i<value.length;i++){
            if(!isLowerCase(value.substr(i,1))){
                return true;
            }
        }
        return false;
    }

    while (line!==0) {
        var a = lines[bts.nxLn()];
        var b = lines[bts.nxLn()];

        var conditionA = true;

        b.split("").forEach(val=>{
            var index = a.indexOf(val);
            if(index==-1){
                index = a.indexOf(val.toLowerCase());
            }
            if(index==-1){
                conditionA = false;
            }
            if(containsUpperCase(a.substr(0,index))){
                conditionA = false;
            }
            a = a.substr(index+1);
        });

        if(containsUpperCase(a)){
            conditionA = false;
        }

        if(conditionA){
            console.log("YES");
        } else {
            console.log("NO");
        }

        line--;
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    dataProcess(_input);
});