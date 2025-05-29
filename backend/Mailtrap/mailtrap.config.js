import { MailtrapClient } from "mailtrap";
import { config } from "dotenv";
config();
const TOKEN = String(process.env.TOKEN_MAILTRAP);

export const client = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Blogit",
};
