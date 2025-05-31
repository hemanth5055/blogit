import { client, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipients = [
    {
      email,
    },
  ];
  try {
    const response = await client.send({
      from: sender,
      to: recipients,
      subject: "Verification Code for Blogit.",
      text: `Your account verification code is ${verificationToken}`,
      category: "Email Verification",
    });
    console.log(response);
    console.log("Email sent successfully", response);
    return true;
  } catch (error) {
    console.log("Error sending verification", error.message);
    console.log(error);
    return false;
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipients = [
    {
      email,
    },
  ];
  try {
    const response = await client.send({
      from: sender,
      to: recipients,
      subject: "Welcome to Blogit",
      text: `Hello ${name}`,
      category: "Welcome Message",
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log("Error sending verification", error.message);
  }
};
