fetch("https://content.guardianapis.com/search?q=Everton&api-key=73e7a3de-3249-4f81-b325-db9cc873f834")
.then(res =>res.json())
.then(data => data.response.results.forEach(e => {
 
    console.log(e.webTitle);
}))