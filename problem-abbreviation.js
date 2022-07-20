const dataProcess = (input) =>  {
    const lines = input.split("\n");

    function readLine(){
        const num = 0;
        this.nxLn = () =>{
            return num++;
        }
    }

    const bts = new readLine();

    const line = parseInt(lines[bts.nxLn()]);

    const isLowerCase = function(value){
        if(value.charCodeAt(0)>96){
            return true;
        } else {
            return false;    
        }
    }

    const containsUpperCase = function(value){
        for(const i=0;i<value.length;i++){
            if(!isLowerCase(value.substr(i,1))){
                return true;
            }
        }
        return false;
    }

    while (line!==0) {
        const a = lines[bts.nxLn()];
        const b = lines[bts.nxLn()];

        const conditionA = true;

        b.split("").forEach(val=>{
            const index = a.indexOf(val);
            if(index==-1){
                index = a.indexOf(val.toLowerCase());
            }
            if(index==-1){
                conditionA = false;
            }
            if(containsUpperCase(a.substr(0,ind))){
                conditionA = false;
            }
            a = a.substr(ind+1);
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