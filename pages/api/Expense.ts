import type { NextApiRequest, NextApiResponse } from "next";
import Users from "../../models/Users";
import bcrypt from "bcryptjs";
interface reqBody {
  user_id: string;
  In_desc?: string;
  Ex_des?: string;
  In_amount?: string;
  Ex_price?: string;
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
        const { name, email, password } = req.body;
        if (
          name.trim().length > 0 &&
          email.trim().length > 0 &&
          password.trim().length > 3
        ) {
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(password, salt);
          const data = await Users.create({
            name,
            email,
            password,
          });
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
