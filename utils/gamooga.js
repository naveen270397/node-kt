module.exports = class Gamooga {
    constructor(userId, action, source) {
        this.u = userId;
        this.e = action;
        this.datetime = new Date().getTime();
        this.p = [];

        if (this.source != '') {
            this.addGamoogaStringData("platform", source);
        }
        this.addGamoogaIntegerData("datetime", new Date().getTime());
    }

    addGamoogaStringData(ky, val) {
        this.p.push({
            "ky": ky,
            "vl": val,
            "tp": "s"
        });
    }

    addGamoogaIntegerData(ky, val) {
        this.p.push({
            "ky": ky,
            "vl": val,
            "tp": "n"
        });
    }

    addGamoogaData(key, val, type) {
        this.p.push({
            "ky": key,
            "vl": val,
            "tp": type
        })
    }
}