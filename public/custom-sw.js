/* eslint-disable no-restricted-globals */
self.addEventListener('push', event => {
  console.log('event: ', event);
  // const data = JSON.parse(event.data.text());
  const data = event.data.text();
  console.log('New notification', data)
  const options = {
    body: data.body,
  }
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
})
