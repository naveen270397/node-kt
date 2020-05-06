class filehandle
{
    fs:any
   constructor(obj:any){ this.fs=obj}
    showfile()
    {
        try{
        this.fs.readFile("test.txt","utf8",(err:any,data:any)=>{
            if (err) throw err;
            console.log("insde readfile \n "+data);
        });
    }
    catch(msg)
    {
    console.log(msg);       
    }
    }
    writeinfile(line:string[])
    {
        try
        {
            this.fs.writeFile("test.txt",line,(err:any)=>{
                if (err)
                throw err;
                console.log("written into file");
            });
        }
        catch(msg) 
        {
            console.log(msg);
        }
    }
}
let obj=new filehandle(require("fs"));
let arr:string[]=["this is new string plus plus\n" ,"and this string is inerted\n","this is last line \n"]
obj.writeinfile(arr);
obj.showfile();