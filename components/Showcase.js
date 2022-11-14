import React, { useState } from "react";
import Image from "next/image";
import { supabase } from "../lib/initSupabase";

const Showcase = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    consent: "",
  });
  const [consented, setConsented] = useState(false);

  const validateEmail = (emailAddress) => {
    let isValid = true;
    if (typeof emailAddress !== "undefined") {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(emailAddress) || emailAddress == "") {
        isValid = false;
        setErrors({ email: "Please enter a valid email address" });
      }
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      if (consented) {
        await addEmailToDb();
        setEmail("");
        setConsented(false);
      } else {
        setErrors({ email: "", consent: "Please confirm consent" });
      }
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrors({ email: "", consent: "" });
  };

  const handleOnCheckChange = (e) => {
    setConsented(() => !consented);
    setErrors({ email: "", consent: "" });
  };

  const addEmailToDb = async () => {
    if (email.length) {
      try {
        let { data, error } = await supabase
          .from("leads")
          .upsert({ email }, { ignoreDuplicates: false })
          .select();
      } catch (err) {
        console.log("failed to add email: ", err);
      }
    }
  };

  return (
    <div className="flex flex-col justify-around md:flex-row">
      <div className="showcase-left self-center">
        <h1 className="max-w-md font-Do-Hyeon text-xl5">
          Invest by Watching Your Favorite Content
        </h1>
        <p className="py-6 font-ProtoMono-LightShadow text-xl2">
          Experience the benefits of Web3
        </p>
        <div className="flex">
          <input
            className="flex-1 rounded-xl border-2 border-black bg-white p-4 placeholder:font-ProtoMono-SemiBold"
            type="email"
            id="email"
            defaultValue=""
            value={email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="ml-3 rounded-xl border-b-4 border-black bg-white p-4 font-ProtoMono-SemiBold hover:border-b-2"
          >
            Stay Updated
          </button>
        </div>
        <span className="font-ProtoMono-Light text-sm text-red-500">
          {errors.email}
        </span>
        <br />
        <span className="font-ProtoMono-Light text-sm text-red-500">
          {errors.consent}
        </span>
        <div className="flex items-center">
          <input
            className="my-3 h-5 w-5"
            type="checkbox"
            id="consent"
            name="consent"
            value={true}
            onChange={handleOnCheckChange}
            checked={consented}
          />
          <label className="px-3 text-gray-700" htmlFor="consent">
            I consent to receiving emails.
          </label>
        </div>
      </div>
      <div className="showcase-right self-start">
        <Image
          alt="Coins"
          src="/images/coins-illustration.svg"
          width={220}
          height={220}
          priority
          className="hidden md:block"
        />
        <Image
          alt="Video"
          src="/images/right-showcase-illustration.svg"
          width={620}
          height={620}
          priority
          className="mx-3 block pt-3"
        />
      </div>
    </div>
  );
};

export default Showcase;
