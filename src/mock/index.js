import Mock from "mockjs"
Mock.mock("/list","post",{
    "status":200,
    // page:1,
    // pageSize:5,
    // total:3000,
    "list|50":[
        {
            "id|+1":1,
            name:"@cname",
            county:"@county(true)"

        }
    ]
})
const {arr}=Mock.mock({
    "arr|50":[
        {
            "id|+1":1,
            name:"@cname",
            county:"@county(true)"
        }
    ]
})


Mock.mock("/goodlist","post",(val)=>{
    
    let {page,pageSize}=JSON.parse(val.body)
    return arr.slice((page-1)*pageSize,page*pageSize)
})


// count:3

Mock.mock("/carousel","post",(val)=>{
    
    let {count}=JSON.parse(val.body)
    
    return Mock.mock({
        "list|30":[{
            id:"@guid",
        name:"@cname",
        link:"@email",
        pic:"@image(100x100)"
        }]
    }).list.slice(0,count)
})