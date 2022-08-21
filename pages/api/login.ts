import type { NextApiRequest, NextApiResponse } from "next";
import Users from "../../models/Users";
import bcrypt from "bcryptjs";
interface reqBody {
  email: string;
  password: string;
}
interface Data {
  success: boolean;
  message: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      try {
        const { email, password }: reqBody = req.body;
        if (email.trim().length > 0 && password.trim().length > 3) {
          const user: any = await Users.findOne({ email });
          if (user) {
            if (await bcrypt.compare(password, user.password)) {
              //continue with login
            } else {
              throw new Error("Invalid Credentials");
            }
          } else {
            throw new Error("User Does not exist");
          }

          return res
            .status(200)
            .send({ success: true, message: "Its going well" });
        } else {
          throw new Error("Please Provide all the details required");
        }
      } catch (error: any) {
        return res
          .status(401)
          .send({ success: false, message: error.message as string });
      }
    default:
      return res
        .status(500)
        .send({ success: false, message: "API call not allowed here" });
  }
}
