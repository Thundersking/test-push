var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
  publicKey: 'BPAal_-Esqc-KY-aFN3ka7NrizI59xsEohWRnajcbkDtR3NDltqSE1ZTwCLeaBe_eGXi0UX8vxrgbXEjtUZBH48',
  privateKey: 'pyTd4smk6TI5oVSvtH3BMGr2hcfj_9nT-PA9GSZL8k0'
}

push.setVapidDetails('mailto:d@vionvi.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cxKN2AtjPKI:APA91bH7w2jCvVdjEG0ZHrp_2z8ONELnSFrmWq68s_JknbWGwwtRpFxsd1A6kFni6evVFrN0vR0FUAkRB53_ZWBBYxPlwFumJToj5ZE2q1SQfdAHXKmYQXB7ruhT7PLYn1-yaOAtXWFF",
    "expirationTime": null,
    "keys": {
        "p256dh": "BCTJci2Nh5M-CnylY6tDroWOQ-BlMajLOckFTathBfy4eYuaSB8mmcTqyG2FnlLV_xdmsiP_aRhdVXq8t2WYjKA",
        "auth": "Ad2-MdGco8WizmjLqcaHDQ"
    }
}

push.sendNotification(sub, 'test message');