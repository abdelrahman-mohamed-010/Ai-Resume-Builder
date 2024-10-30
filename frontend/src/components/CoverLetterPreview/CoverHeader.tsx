import { useState } from "react";

const Header = () => {
  const [name, setName] = useState("Abdelrahman Mohamed");
  const [location, setLocation] = useState("Cairo, Egypt");
  const [email, setEmail] = useState("abdelrahman@example.com");
  const [phone, setPhone] = useState("+20 1069175527");

  return (
    <div className="mb-6">
      <input
        type="text"
        className="text-2xl font-bold pb-1 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <hr className="border-gray-300 my-2" />
      <input
        type="text"
        className="text-gray-600 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 mb-1 w-full"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="email"
        className="text-gray-600 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 mb-1 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        className="text-gray-600 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 w-full"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
};

export default Header;
