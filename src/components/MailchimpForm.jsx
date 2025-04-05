import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

const MailchimpForm = () => {
  const u = process.env.REACT_APP_MAILCHIMP_U;
  const id = process.env.REACT_APP_MAILCHIMP_ID;
  const url = process.env.REACT_APP_MAILCHIMP_URL;

  if (!url || !u || !id) {
    console.warn("Missing Mailchimp environment variables.");
    return null;
  }

  const postUrl = `${url}?u=${u}&id=${id}`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default MailchimpForm;
