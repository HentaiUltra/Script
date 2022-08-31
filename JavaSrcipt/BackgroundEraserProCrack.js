var body = JSON.parse($response.body)
  .replace(/\"is_activated\":\d/g, '"is_activated":1')
  .replace(/\"remain_days\":\d+/g, '"remain_days":666666')
  .replace(/\"will_expire\":\d/g, '"will_expire":0')
  .replace(/\"vip_special\":\d/g, '"vip_special":1')
  .replace(/\"is_lifetime\":\d/g, '"is_lifetime":1')
  .replace(/\"expired_at\":\d+/g, '"expired_at":32495475600')
  .replace(/\"expire_time\":\".*?\"/g, '"expire_time":"2999-09-28"');
$done({ body: JSON.stringify(body) });
