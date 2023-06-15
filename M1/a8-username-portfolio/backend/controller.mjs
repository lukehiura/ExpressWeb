import 'dotenv/config';
import express from 'express';
import * as model from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json()); // REST needs JSON MIME type.

// CREATE route
app.post('/log', (req, res) => {
  const { description, amount, date, currency} = req.body;

  model.createTransaction(description, amount, date, currency)
    .then(() => {
      res.status(201).send('Transaction created successfully');
    })
    .catch((error) => {
      res.status(400).send(`Failed to create transaction: ${error.message}`);
    });
});


// RETRIEVE route
app.get('/log', (req, res) => {
  model.retrieveTransactions()
    .then((transactions) => {
      if (transactions.length >= 0) {
        res.status(200).json(transactions);
      } else {
        res.status(404).json({ message: 'No transactions found' });
      }
    })
    .catch((error) => {
      res.status(400).send(`Failed to retrieve transactions: ${error.message}`);
    });
});

// RETRIEVE transaction by ID
app.get('/log/:id', (req, res) => {
  const { id } = req.params;

  model.retrieveTransactionById(id)
    .then((transaction) => {
      if (transaction) {
        res.status(200).json(transaction);
      } else {
        res.status(404).send('Transaction not found');
      }
    })
    .catch((error) => {
      res.status(400).send(`Failed to retrieve transaction: ${error.message}`);
    });
});

// UPDATE route
app.put('/log/:id', (req, res) => {
  const { id } = req.params;
  const { description, amount, date, currency } = req.body;

  model.updateTransaction(id, description, amount, date, currency)
    .then((transaction) => {
      res.status(200).json(transaction);
    })
    .catch((error) => {
      res.status(400).send(`Failed to update transaction: ${error.message}`);
    });
});

// DELETE route
app.delete('/log/:id', (req, res) => {
  const { id } = req.params;

  model.deleteTransactionById(id)
    .then((deletedCount) => {
      if (deletedCount > 0) {
        res.status(204).send();
      } else {
        res.status(404).send('Transaction not found');
      }
    })
    .catch((error) => {
      res.status(400).send(`Failed to delete transaction: ${error.message}`);
    });
});


// RETRIEVE a specific transaction by ID route
app.get('/log/:id', (req, res) => {
  const { id } = req.params;

  model.retrieveTransactionById(id)
    .then((transaction) => {
      if (transaction) {
        res.status(200).json(transaction);
      } else {
        res.status(404).send('Transaction not found');
      }
    })
    .catch((error) => {
      res.status(400).send(`Failed to retrieve transaction: ${error.message}`);
    });
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
