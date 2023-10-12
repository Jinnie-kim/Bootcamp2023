const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
  mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
  console.log('MONGO CONNECTION OPEN!!!');
}

main().catch((err) => {
  console.log('Oh no Mongo connection error!');
  console.log(err);
});

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//   // const user = new User({ username: 'Taylorfan98', age: 25 });
//   const user = await User.findOne({ username: 'Taylorfan98' });
//   const tweet2 = new Tweet({ text: 'I love Nick too😂!', likes: 183 });
//   tweet2.user = user;
//   tweet2.save();
// };

// makeTweets();

const findTweet = async () => {
  const t = await Tweet.find({}).populate('user');
  console.log(t);
};

findTweet();
