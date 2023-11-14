import { NextApiRequest, NextApiResponse } from "next";
import Nodemail from "nodemailer";
import { google } from "googleapis";

type TData = {
  name: string;
  email: string;
  phoneNumber: string;
  seanceType: string;
  message: string;
};

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const createTransporter = (accessToken: any) => {
  return Nodemail.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      clientSecret: CLIENT_SECRET,
      clientId: CLIENT_ID,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
};

const createOptions = (data: TData) => {
  return {
    from: data.email,
    to: process.env.EMAIL,
    subject: `Nouvelle demande d'information séance ${data.seanceType}`,
    replyTo: data.email,
    text: `Nom : ${data.name} \nTéléphone : ${data.phoneNumber} \nType de séance: ${data.seanceType} \nMessage : ${data.message}`,
  };
};

const verifyCaptcha = async (req: NextApiRequest) => {
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body.reCaptchaToken}`;
  const response = await fetch(verifyUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { score } = await response.json();

  return score;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      let captchaScore;
      try {
        captchaScore = await verifyCaptcha(req);
      } catch (error) {
        console.error("Error while fetching captcha score", error);
        return res.status(500).send(error);
      }

      if (captchaScore < 0.5) {
        return res
          .status(400)
          .json({ message: "Oups, il y a eu un problème ! N'hesitez pas a me contacter directement par portable." });
      }

      let accessToken;
      try {
        accessToken = await oAuth2Client.getAccessToken();
      } catch (error) {
        console.error("Error while fetching accessToken OAuth2é", error);
        return res.status(500).send(error);
      }

      const transporter = createTransporter(accessToken);
      const mailOptions = createOptions(req.body);

      try {
        await transporter.sendMail(mailOptions);
      } catch (error) {
        console.error("Error while sending mail", error);
        return res.status(500).send(error);
      }

      return res.status(200).json({ message: "Merci pour votre message, je vous réponds au plus vite !" });
    default:
      break;
  }
}
