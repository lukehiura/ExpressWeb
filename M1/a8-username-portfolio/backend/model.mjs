import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', (err) => {
  if (err) {
    console.error('Failed to connect to the server:', err);
    process.exit(1);
  } else {
    console.log('Successfully connected to MongoDB "bank" collection using Mongoose.');
  }
});

const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

const createTransaction = async (description, amount, date) => {
  try {
    const newTransaction = new Transaction({
      description,
      amount,
      date,
    });

    const savedTransaction = await newTransaction.save();
    return savedTransaction;
  } catch (error) {
    throw new Error('Failed to create transaction');
  }
};

// Retrieve all transaction documents
const retrieveTransactions = async () => {
  try {
    const query = Transaction.find();
    return query.exec();
  } catch (error) {
    throw new Error('Failed to retrieve transactions');
  }
};

// Retrieve a transaction document by ID
const retrieveTransactionById = async (id) => {
  try {
    const query = Transaction.findById(id);
    return query.exec();
  } catch (error) {
    throw new Error('Failed to retrieve transaction by ID');
  }
};

// Update a transaction document
const updateTransaction = async (id, description, amount, date) => {
  try {
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      throw new Error('Transaction not found');
    }

    transaction.description = description;
    transaction.amount = amount;
    transaction.date = date;

    const updatedTransaction = await transaction.save();
    return updatedTransaction;
  } catch (error) {
    throw new Error('Failed to update transaction');
  }
};

// Delete a transaction document by ID
const deleteTransactionById = async (id) => {
  try {
    const result = await Transaction.deleteOne({ _id: id });
    return result.deletedCount;
  } catch (error) {
    throw new Error('Failed to delete transaction');
  }
};

export {
  createTransaction,
  retrieveTransactions,
  retrieveTransactionById,
  updateTransaction,
  deleteTransactionById
};

