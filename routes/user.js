const router = require('express').Router()

// CRUB
// data 

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


module.exports = router