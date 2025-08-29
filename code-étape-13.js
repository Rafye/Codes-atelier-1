let reqInfo = {url:req.url, method:req.method}; 
res.writeHead(200, {"Content-Type": "application/json"}); 
res.end(JSON.stringify(reqInfo));