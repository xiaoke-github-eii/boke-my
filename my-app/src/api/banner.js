

import request from "./request";
// console.log(request,"request")
export async function getBanners() {
  return await request.get("/api/banner");
}

// getBanners().then(r=>{
//     console.log(r);
// })