import mongoose from "mongoose";
const reqString = {
  type: String,
  required: true,
};
const singleExpense = new mongoose.Schema({
  price: reqString,
  dscr: reqString,
  date: {
    type: Date,
    default: Date.now(),
  },
});
const income = new mongoose.Schema({
  amount: reqString,
  dscr: reqString,
  date: {
    type: Date,
    default: Date.now(),
  },
});
const UserModelScheema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  expenses: [singleExpense],
  income: [income],

  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
});
const UserModel =
  mongoose.models.user || mongoose.model("user", UserModelScheema);
export default UserModel;
