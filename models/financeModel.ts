import mongoose from "mongoose";

const BalanceSchema = new mongoose.Schema({
  current: Number,
  income: Number,
  expenses: Number,
});

const TransactionSchema = new mongoose.Schema({
  avatar: String,
  name: String,
  category: String,
  date: Date,
  amount: Number,
  recurring: Boolean,
});

const BudgetSchema = new mongoose.Schema({
  category: String,
  maximum: Number,
  theme: String,
});

const PotSchema = new mongoose.Schema({
  name: String,
  target: Number,
  total: Number,
  theme: String,
});

const FinanceSchema = new mongoose.Schema({
  balance: BalanceSchema,
  transactions: [TransactionSchema],
  budgets: [BudgetSchema],
  pots: [PotSchema],
});

const Finance =
  mongoose.models.Finance || mongoose.model("Finance", FinanceSchema);

export default Finance;
