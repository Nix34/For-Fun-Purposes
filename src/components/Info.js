import React from "react";
import { useState } from "react";

function Info() {
  const [info, setInfo] = useState({
    fullName: "John Wick",
    age: "30",
    email: "Aaaaaa@gmail.com",
  });

  const [fullName, setFullName] = useState(info.fullName);
  const [age, setAge] = useState(info.age);
  const [email, setEmail] = useState(info.email);

  const handleChange = (event) => {
    setInfo({
      fullName: fullName,
      age: age,
      email: email,
    });

    event.preventDefault();
  };

  return (
    <div className="w-[30%] mx-[auto] my-[auto] bg-[#fff7ee] text-[#0b2a58]">
      <div className="my-[20px] border-solid border-2 p-[20px]">
        <h2 className="text-center">Saved Data</h2>
        <div>fullName: {info.fullName}</div>
        <div>age: {info.age}</div>
        <div>email: {info.email}</div>
      </div>

      <div className="my-[20px] border-solid border-2  p-[20px]">
        <h2 className="text-center">Preview Data</h2>
        <div>fullName: {fullName}</div>
        <div>age: {age}</div>
        <div>email: {email}</div>
      </div>

      <form
        className="border-solid border-2  p-[20px]"
        onSubmit={(e) => handleChange(e)}
      >
        <label className="flex justify-between">
          Full Name:
          <input
            defaultValue={info.fullName}
            type="text"
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label className="flex justify-between">
          Age:
          <input
            defaultValue={info.age}
            type="number"
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label className="flex justify-between">
          Email Address:
          <input
            defaultValue={info.emal}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button className="w-full">Set</button>
      </form>
    </div>
  );
}

export default Info;
