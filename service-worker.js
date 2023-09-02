// self.addEventListener('push', () => {
//     self.registration.sendNotification('test message', {})
// })

self.addEventListener('push', function (e) {
    var options = {
        body: 'Thin notification was generated from a push!',
        icon: '/img/icons/android-chrome-192x192.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close', title: 'Close',
                icon: 'images/xmark.png'
            }
        ]
    };

    e.waitUntil(
        self.registration.showNotification('Тестовое уведомление 3', options)
    );
});