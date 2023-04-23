// const NodeCache = require("node-cache");

// const cache = new NodeCache();

// export const duration = (req:any, res:any, next:any)=>{

//     if(req.method !== "GET"){
//         console.error("Cannot cache non-GET methods");
//         return next();
//     }

//     const key = req.originalUrl;
//     const cachedResponse = cache.get(key);

//     if(cachedResponse){
//         console.log(`Cache hit for ${key}`);
//         res.send(cachedResponse);
//     }else{
//         res.originalSend = res.send;
//         res.send = body =>{
//             res.originalSend(body);
//             cache.set(key, body)
//         }
//     }


// }