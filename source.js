"use strict";
var filehandle = /** @class */ (function () {
    function filehandle(val) {
        this.fs = val;
    }
    filehandle.prototype.makedir = function (path) {
        try {
            this.fs.mkdir(process.cwd() + path, function (err) {
                if (err)
                    throw err;
                else
                    console.log("directory created\n");
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    filehandle.prototype.readfromfile = function (path) {
        try {
            this.fs.readFile(process.cwd() + path, "utf8", function (err, data) {
                if (err)
                    throw err;
                else
                    console.log(data);
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    filehandle.prototype.writeintofile = function (path, data) {
        try {
            this.fs.appendFile(process.cwd() + path, data + "\n", function (err) {
                if (err)
                    throw err;
                else
                    console.log("successfully written into file \n");
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    return filehandle;
}());
var obj = new filehandle(require("fs"));
var path = "/newdir/";
obj.makedir(path);
var data = "this is inserted string";
obj.writeintofile(path + "newfile.txt", data);
obj.readfromfile(path + "newfile.txt");
