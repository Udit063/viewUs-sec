import * as React from "react";
import { ReviewConfirmationEmail } from "./ReviewConfirmation";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <ReviewConfirmationEmail name={firstName} />
  </div>
);
//1 create a mail to send a confirmation to user that review is stored, create this for normal
//2 add a email service call here,to send a mail to user notifying them that they have reviews more that 10 now, they need to update
