app.get('/' , (req , res) => { // ขอหน่อย , ส่งข้อมูลกลับ 
    res.send('This get')
}); // get post put delete

app.post('/' , (req , res) => { 
     res.send('This post')
});

app.put('/' , (req , res) => { 
     res.send('This put')
});
app.delete('/' , (req , res) => { 
     res.send('This delete')
});



// params 

app.get('/users/:name/:age' , (req , res) => { //api end point
    let name = req.params.name
    let age = req.params.age

    console.log(name);
    console.log(age);
    res.send('Your name :'+ name)
    res.send('Your Age :'+ age)
})


//query
app.get('/users?name=ken' , (req , res) => { 
     console.log(req.query);
     res.send('Hello')
    
 });


 //body
app.post('/users' , (req, res) => {
     let name = req.body.name
     let age = req.body.age
     res.send('name : ' + name + ' age: ' + age)
 })


 //error
 app.get('/users', (req, res) => {
     try {
     res.status(200).json({
         message : "success",
         data : users
     })
     } catch (err) {
         console.log("Error :" + err.message);
     }
 })
 
 //data
 var users = [
    {
        id: 1 ,
        name: "kenjung" ,
        age: 20
    },
    {
        id : 2 ,
        name: "Phoom",
        age: 21
    }
] 

//get
router.get('/', (req, res) => {
    try {
    res.status(200).json({
        message : "success",
        data : users
    })
    } catch (err) {
        console.log("Error :" + err.message);
    }
})

// post
router.post('/', (req, res) => {
    
    try {
        let {name} = req.body;
        let {age} = req.body;


        const user = {
        id : users.length + 1,
        name : name,
        age : age
     }
    
    users.push(user)
    
    res.status(200).json({
        message: "เพิ่มข้อมูลผู้ใช้สำเร็จ",
        data : users
      })

    } catch (err) {
        console.log("Error :" + err.message);
    }
})

//put
router.put('/:id' , (req, res) => {
    try {
        const id = req.params.id
        const name = req.body.name
        const age = req.body.age
        
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users[i].name = name
                users[i].age = age
            }            
        }
        res.status(200).json({
            message: "แก้ไขข้อมูลสำเร็จ",
            data: users
        })

    } catch (err) {
        console.log(err.message);
    }
})

//delete
router.delete('/:id' , (req, res) => {
    // Values
   
    try {

        // 
        const id = req.params.id
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users = users.splice(i , 1)
            }           
        }

        // Response
        res.status(200).json({
            message: "ลบข้อมูลผู้ใช้สำเร็จ",
            data : []
        })

    } catch {
        console.log(err.message);
    }
})