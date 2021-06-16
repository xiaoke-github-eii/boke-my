import request from "./request" 
//  获取博客数据
export async function getBlogs (page = 1,limit=10,categoryid= -1){
   return await request.get("/api/blog",{
         params:{
             page,
             limit,
             categoryid,
         },
     });
} 


export async function getBlogCategories (){
    return await request.get("/api/blogtype");
 } 

//  获取单个博客
 export async function getBlog(id){
     return await request.get(`/api/blog/${id}`)

 } 
//  提交评论
 export async function postComment(commentInfo){
    return await request.post(`/api/comment`,commentInfo);

} 

// 分页获取评论 
export async function getComment(page=1,limit=10,blogid){
    return await request.get('/api/commet',{
        params:{
            blogid,
            page ,
            limit
        }
    })

} 