import express from "express";

const PORT = 3000;
const app = express();

const users = [
    {
        name: 'Clara',
        age: 39,
        id: 68757
    },
    {
        name: 'David',
        age: 65,
        id: 2678265
    },
];

app.use(express.json());

app.get('/', (req, res)=>{
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Min Express App</title>
        </head>
        <body>
            <h1>Hej från Express!</h1>
            <p>GET request mottagen.</p>
        </body>
        </html>
    `)
});

app.post('/users', (req, res)=>{
    console.log('post users', req.body);

    const newUser = {...req.body, id: Math.ceil(Math.random()*100000) };

    users.push(newUser);

    res.json({
        message: 'POST request received',
        newUser: newUser.id
    } )
});

app.get('/users', (req, res)=>{
    console.log('get users', req.query);

    if(req.query.field){
        const fieldArr = users.map(user => user[req.query.field])
        res.json(fieldArr);
    }
    else{
        res.json(users);
    }
});

// Hämta en specific användare med dess id
app.get('/users/:id', (req, res)=>{
    console.log(req.params)

    const user = users.find( user => user.id == req.params.id);
    if(user) res.json(user)
    else{
        res.status(404);
        res.json({message: 'no user found'})
    }
})

app.patch('/users/:id', (req, res)=>{
    console.log('patch', req.params, req.body );

    // Returnerar inte en klon vilket betyder att ändrar vi på user ändras det objektet i arrayen users
    const user = users.find( user => user.id == req.params.id);

    if(user){
        user.name = req.body.name;
        res.json(user);
    }
    else{
        res.status(404);
        res.json({message: 'no user found'})
    }
})


app.listen(PORT, ()=>{
    console.log('Listening on port ', PORT)
})