const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000; // You can change the port number as needed

const uri = 'mongodb+srv://saitarakaram:L2HwgE8VLais1o5l@cluster0.opravw6.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection string

app.get('/api/products', async (req, res) => {
  let client; // Declare the client variable outside the try block

  try {
    // Create a new MongoClient
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    app.get('/', (req, res) => {
      res.send('Hello COMTEK, This is my Node JS application');
    });

    // Connect to the MongoDB server
    await client.connect();

    // Reference to the MongoDB collection where your products are stored
    const productsCollection = client.db('Node-API').collection('Product');

    // Fetch all products from the collection
    const products = await productsCollection.find({}).toArray();

    // Respond with the products as JSON
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'An error occurred while fetching products' });
  } finally {
    // Close the connection when done
    if (client) {
      client.close();
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
