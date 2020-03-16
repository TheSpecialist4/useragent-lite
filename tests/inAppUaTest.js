const ua = require("../lib/useragent-lite");

exports["Instagram"] = function(test) {
    const s = "Mozilla/5.0 (Linux; Android 8.1.0; motorola one Build/OPKS28.63-18-3; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.80 Mobile Safari/537.36 Instagram 72.0.0.21.98 Android (27/8.1.0; 320dpi; 720x1362; motorola; motorola one; deen_sprout; qcom; pt_BR; 132081645)";
    const a = ua(s);
    test.ok(a.inApp === true);
    test.done();
};

exports["Facebook"] = function(test) {
    const s = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.1.3;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Sprint]";
    const a = ua(s);
    test.ok(a.inApp === true);
    test.done();
};

exports["Google Search App"] = function(test) {
    const s = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/86.0.276299193 Mobile/15E148 Safari/605.1";
    const a = ua(s);
    test.ok(a.inApp === true);
    test.done();
};
