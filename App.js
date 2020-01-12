const express = require('express');
const cors = require('cors');
const {sampleRoutes} = require('./routes')

const app = express();
app.use(cors());
app.use(express.json());

//is it working
app.get('/', (req,res)=>{ res.json('Its working!');});

// //routes
app.use('/expressBoilerplate', sampleRoutes);


//listen to port number specified in environment variable or 5000
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));



