const CoverLetterPreview = () => {
  return (
    <div className=" flex flex-col gap-3 items-end ">
      <div className=" max-w-2xl  p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
        <div className="mb-6">
          <h1 className="text-2xl font-bold pb-1" contentEditable>
            [Your Name]
          </h1>
          <hr className="border-gray-300 my-2" />
          <p className="text-gray-600" contentEditable>
            [Your Address]
          </p>
          <p className="text-gray-600" contentEditable>
            [City, State, Zip]
          </p>
          <p className="text-gray-600" contentEditable>
            [Email Address]
          </p>
          <p className="text-gray-600" contentEditable>
            [Phone Number]
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600" contentEditable>
            [Date]
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-800" contentEditable>
            Dear [Hiring Manager's Name],
          </p>
          <p className="mt-4 text-gray-800" contentEditable>
            I am writing to express my interest in the [Job Title] position at
            [Company Name]. I believe my skills and experiences align perfectly
            with the requirements of this role.
          </p>
          <p className="mt-4 text-gray-800" contentEditable>
            [Add more paragraphs discussing your qualifications, experiences,
            and enthusiasm for the position.]
          </p>
          <p className="mt-4 text-gray-800" contentEditable>
            Thank you for considering my application. I look forward to the
            opportunity to discuss my qualifications further.
          </p>
          <p className="mt-4 text-gray-800">Sincerely,</p>
          <p className="text-gray-800" contentEditable>
            [Your Name]
          </p>
        </div>
      </div>
      <button className=" w-fit rounded bg-primary hover:bg-indigo-800 transition-all font-bold text-white py-2 px-6">
        {/* Save */}
        Add To Archive
      </button>
    </div>
  );
};

export default CoverLetterPreview;
