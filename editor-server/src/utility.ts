import model from "./models";
import "dotenv-defaults/config";

const initData = async () => {
  await model.User.deleteMany();
  // const saltRounds = 10;
  // await Promise.all(
  //     userData.map(async(data)=> {
  //         const {userID, name, password} = data;
  //         const newPassword = await bcrypt.hash(password, saltRounds)
  //         const user = new model.User({userID, password: newPassword, name})
  //         await user.save()
  //     })
  // )
};

const generateID = () => {
  var unique = new Date().valueOf();
  return (unique % 1000000000).toString(32);
};

export { initData, generateID };
