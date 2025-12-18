import express from 'express'

const app = express()
const port = 3000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        'message':'Server is running...'
    })
})

// Endpoint 2: Sample API
app.get('/api/user', (req, res) => {
  res.json({
    id: 1,
    name: 'John Doe',
    role: 'Developer'
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});