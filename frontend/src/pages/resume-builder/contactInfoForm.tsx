import Stepper from "./Stepper";

const contactInfoForm = () => {
  return (
    <>
      <Stepper number={1} />
      <form>
        <div className="text-sm mt-6 font-semibold text-neutral-600">
          * indicates a required field
        </div>
        <div className="flex gap-4 mt-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-neutral-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                autoFocus
                placeholder="e.g. Farid"
                className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
                required
              />
            </div>

            {/* Surname */}
            <div>
              <label htmlFor="surname" className="block text-neutral-700 mb-2">
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="e.g. Jhon"
                className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
                required
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="Job Role" className="block text-neutral-700 mb-2">
                Job Role
              </label>
              <input
                type="text"
                id="Job Role"
                name="Job Role"
                placeholder="e.g., Software Engineer"
                className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 w-full">
            {/* Country */}
            <div>
              <label htmlFor="adress" className="block text-neutral-700 mb-2">
                Adress
              </label>
              <input
                type="text"
                id="adress"
                name="adress"
                placeholder="e.g., 456 Elm Street"
                className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
              />
            </div>

            {/* Postal Code and Phone (Side by Side) */}
            <div className="flex gap-4">
              {/* Postal Code */}
              <div className="flex-1">
                <label
                  htmlFor="postalCode"
                  className="block text-neutral-700 mb-2"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  placeholder="e.g. 4057"
                  className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
                />
              </div>

              {/* Phone */}
              <div className="flex-1">
                <label htmlFor="phone" className="block text-neutral-700 mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="e.g. +27 82 978 5313"
                  className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-neutral-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
                required
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default contactInfoForm;
