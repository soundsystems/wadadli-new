// pages/api/subscribe.ts
import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";

interface MailchimpResponse {
  email_address: string;
  status: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      const mailchimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

      if (!mailchimpUrl) {
        console.error("Mailchimp URL is not set");
        res.status(500).json({ message: "Error subscribing to newsletter" });
        return;
      }

      const response: AxiosResponse<MailchimpResponse> = await axios.post(mailchimpUrl, { email_address: email, status: "subscribed" });

      if (response.status === 200) {
        res.status(200).json({ message: "Successfully subscribed!" });
      } else {
        res.status(400).json({ message: "Failed to subscribe." });
      }
  
} catch (error) {
    if (error instanceof Error) {
      console.error("Error subscribing to newsletter:", error.message);
    } else {
      console.error("Error subscribing to newsletter:", error);
    }
    res.status(500).json({ message: "Error subscribing to newsletter" });
}
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
