const Stepper = ({ number: stepNumber = 2 }) => {
  const step = 5;
  return (
    <div className=" mt-6 flex justify-between">
      {Array.from({ length: step }, (_, index) => (
        <div className={` relative w-full flex justify-center`}>
          <span
            className={`w-8 text-white font-bold h-8 rounded-full ${
              stepNumber > index ? "bg-indigo-700" : " bg-indigo-200"
            } text-center flex items-center justify-center`}
          >
            {index + 1}
          </span>
          <div
            className={` absolute w-full h-1 bg-black ${
              stepNumber > index + 1 ? "bg-indigo-700" : " bg-indigo-200"
            } top-1/2 -translate-y-1/2 left-1/2 -z-10 ${
              index + 1 === step ? "hidden" : ""
            } `}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
