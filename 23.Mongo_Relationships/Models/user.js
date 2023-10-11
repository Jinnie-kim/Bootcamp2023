const mongoose = require('mongoose');

async function main() {
  mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
  console.log('MONGO CONNECTION OPEN!!!');
}

main().catch((err) => {
  console.log('Oh no Mongo connection error!');
  console.log(err);
});

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  // directly embed
  addresses: [
    {
      _id: { _id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
  const u = new User({
    first: 'Harry',
    last: 'Potter',
  });
  u.addresses.push({
    street: '123 Sesame st.',
    city: 'New York',
    state: 'New York',
    country: 'USA',
  });
  const res = await u.save();
  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: '123 Bella st.',
    city: 'Forks',
    state: 'Washington',
    country: 'USA',
  });
  const res = await user.save();
  console.log(res);
};

makeUser();

addAddress('65269ef864d87f8879a1bcef');
