import mailchimp from "@mailchimp/mailchimp_marketing";

// configuration de mailchimp
const mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_API_SERVER!
});