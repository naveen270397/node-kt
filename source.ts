class filehandle
{
    fs:any;
    constructor(val:any){this.fs=val}
    makedir(path:string)
    {
        try
        {
        this.fs.mkdir(process.cwd()+path,(err:any)=>{
            if (err)
            throw err;
            else console.log("directory created\n");
        });
        }   
        catch(err)
        {
            console.log(err);
        }
    }
        readfromfile(path:string)
    {
        try
        {
            this.fs.readFile(process.cwd()+path,"utf8",(err:any,data:any)=>{
                if (err) throw err;
                else console.log(data);
            });
        }
        catch(err){
        console.log(err);
        }
    }

    writeintofile(path:string,data:any)
    {
        try{
            this.fs.appendFile(process.cwd()+path,data+"\n",(err:any)=>{
                if (err)
                throw err;
                else console.log("successfully written into file \n");
            })
        }
        catch(err)
        {
            console.log(err);
        }
    }
}
let obj=new filehandle(require("fs"));
let path="/newdir/";
obj.makedir(path);
let data="this is inserted string";
obj.writeintofile(path+"newfile.txt",data);
obj.readfromfile(path+"newfile.txt");

