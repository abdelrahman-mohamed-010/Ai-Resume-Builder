import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { motion } from "framer-motion";

interface ProfileFormInputs {
  name: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const SettingsPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormInputs>();
  const [profilePhoto, setProfilePhoto] = useState<string | ArrayBuffer | null>(
    null
  );

  const onSubmit = (data: ProfileFormInputs) => {
    // Handle password update here
    console.log("Updating password:", data);
  };

  const handleDeleteAccount = () => {
    // Handle account deletion logic here
    console.log("Account deleted");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col w-full min-h-screen bg-light-background dark:bg-dark-background px-8 py-4"
    >
      <section>
        <h2 className="text-2xl font-semibold text-primary-text dark:text-light-background mb-4">
          General Settings
        </h2>
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}

          {/* Login/Logout Button */}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-primary-text dark:text-light-background mb-4">
          Profile Settings
        </h2>
        {profilePhoto ? (
          <img
            src={profilePhoto as string}
            alt="Profile"
            className="w-28 h-28 rounded-full mr-4"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gray-400 flex items-center justify-center mr-4 cursor-pointer group hover:bg-gray-500 transition-all">
            <FaUser className="text-white text-3xl group-hover:hidden" />
            <GrDocumentUpdate className="text-white text-3xl hidden group-hover:block" />
          </div>
        )}
        {/* Static Info */}
        <div className="mb-6 mt-6">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              className="block w-full p-2 border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              defaultValue="johndoe@example.com"
              className="block w-full p-2 border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
              readOnly
            />
          </div>
        </div>
        {/* Change Password Section */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                {...register("currentPassword", { required: true })}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="••••••••"
              />
              {errors.currentPassword && (
                <p className="text-red-500 text-sm">
                  Current password is required
                </p>
              )}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                {...register("newPassword", { required: true, minLength: 6 })}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="••••••••"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm">
                  New password must be at least 6 characters
                </p>
              )}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", { required: true })}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  Please confirm your new password
                </p>
              )}
            </div>
          </div>

          <div className=" flex justify-between"></div>
          <div>
            <button
              type="submit"
              className=" w-40 bg-primary  text-white font-semibold py-2 rounded-md"
            >
              Update Password
            </button>
          </div>
        </form>
        {/* Delete Account Button */}
        <div className="mt-4">
          <button
            onClick={handleDeleteAccount}
            className=" w-40 bg-red-800 text-white font-semibold py-2 rounded-md "
          >
            Delete Account
          </button>
        </div>
        {/* Save Button */}
      </section>
    </motion.div>
  );
};

export default SettingsPage;
