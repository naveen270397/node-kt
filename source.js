"use strict";
var filehandle = /** @class */ (function () {
    function filehandle(obj) {
        this.fs = obj;
    }
    filehandle.prototype.showfile = function () {
        try {
            this.fs.readFile("test.txt", "utf8", function (err, data) {
                if (err)
                    throw err;
                console.log("insde readfile \n " + data);
            });
        }
        catch (msg) {
            console.log(msg);
        }
    };
    filehandle.prototype.writeinfile = function (line) {
        try {
            this.fs.writeFile("test.txt", line, function (err) {
                if (err)
                    throw err;
                console.log("written into file");
            });
        }
        catch (msg) {
            console.log(msg);
        }
    };
    return filehandle;
}());
var obj = new filehandle(require("fs"));
var arr = ["this is new string plus plus\n", "and this string is inerted\n", "this is last line \n"];
obj.writeinfile(arr);
obj.showfile();
