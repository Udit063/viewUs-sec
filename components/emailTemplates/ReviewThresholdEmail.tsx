export const ReviewThresholdEmail = ({
  companyName,
}: {
  companyName: string;
}) => {
  return (
    <div className="p-8 min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-black">
            Hello, {companyName} Team
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            Congratulations! You have received more than 10 reviews on your
            platform.
          </p>
          <p className="mt-2 text-gray-600">
            Please update your product profile to reflect the feedback and
            ensure the best user experience.
          </p>
          <div className="mt-6">
            <p className="text-gray-700 font-semibold">Best Regards,</p>
            <p className="font-bold text-indigo-600">The Team</p>
          </div>

          <footer className="mt-8 border-t pt-4 text-sm text-gray-600">
            <p>
              If you have any questions, feel free to{" "}
              <a
                href="mailto:team@viewus.in"
                className="text-indigo-500 hover:text-indigo-600 ml-1"
              >
                contact us
              </a>
              .
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};
