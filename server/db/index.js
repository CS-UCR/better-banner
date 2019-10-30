const {Pool} = require('pg')
const express = require("express")
const app = express();

const text = "SELECT * FROM users" 

const pool = new Pool({
	user: "stanl",
	host: "localhost",
	database: "api",
	password: "password",
	port: 5432
})


pool.query(text, (err, res) =>{
	if(err){
	console.log(err, res.rows)
	}else{
		const results = res.rows
		console.log(results)
		app.get("/api", (req,res) => {
			//res.send("these are my users")
			res.send(results)
		})
		app.listen(3001, ()=> console.log("Web server is listening on port 3001"))
		
	}
})

pool
	.query(text)
	.catch(e => console.error(e.stack))

