import fs from "fs";
import path from "path";
export default handler = (req, res) => {
  if (req.method === "POST") {
    const filePath = path.join(process.cwd(), "data", "users.json");
    const fileData = fs.readFileSync(filePath);
    const currentUser = JSON.parse(req?.body);
    const newObj = {
      ...currentUser,
      id: new Date().getTime(),
      token: "nextjsdemo" + currentUser?.email,
    };
    // const isExistEmail = fileData.find()
  }
};
