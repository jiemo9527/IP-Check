async function handleRequest(request) {
  const { pathname } = new URL(request.url)

    
  
//APP调用
//   const data = fetch("http://ip-api.com/json"+pathname+"?lang=zh-CN")
//         .then(res => res.text()
//         return res)
//         .then(res => {
//             res=JSON.parse(res)
//             status=res['status']
//             country=res['country']
//             countryCode=res['countryCode']
//             region=res['region']
//             regionName=res['regionName']
//             city=res['city']
//             zip=res['zip']
//             lat=res['lat']
//             lon=res['lon']
//             timezone=res['timezone']
//             isp=res['isp']
//             org=res['org']
//             as=res['as']
//             query=res['query']
//         })
    // response = new Response(data, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } })
    return fetch("http://ip-api.com/json"+pathname+"?lang=zh-CN")
}


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
