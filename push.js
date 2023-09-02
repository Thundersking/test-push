var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
    publicKey: 'BPAal_-Esqc-KY-aFN3ka7NrizI59xsEohWRnajcbkDtR3NDltqSE1ZTwCLeaBe_eGXi0UX8vxrgbXEjtUZBH48',
    privateKey: 'pyTd4smk6TI5oVSvtH3BMGr2hcfj_9nT-PA9GSZL8k0'
}

push.setVapidDetails('mailto:d@vionvi.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fTWxhj0i5pc:APA91bEtBhcj4kPGPllO4Gs0VQUQh2RIVVnytKiS7Dk5foFbhavWwN0x8GbGnUoKVNc3w3yZKVFPcdpEVW2bPtJ4zlTwEgwCwPQiUoC3vSv9Ocjihb4hpNWvtujWHd_sriWobAzo449a",
    "expirationTime": null,
    "keys": {
        "p256dh": "BCaMeE7um7UBHIcVugWcg03LEI6bgOPusHj-2wIMeoeX_EHLYh--uIVwfB597-LxExtqF0A4O00OpBZ5o4PCGF0",
        "auth": "G0gwOT2LW2rMOf7tJOB7yQ"
    }
}

push.sendNotification(sub, 'test message');