import { useEffect, useState } from "react";

const Form = () => {
  const [info, setInfo] = useState([]);

  // Form Data
  const [firstName, setFirstName] = useState(info.firstName);
  const [lastName, setLastName] = useState(info.lastName);
  const [age, setAge] = useState(info.age);
  const [contactNumber, setContactNumber] = useState(info.contactNumber);
  const [emailAddress, setEmailAddress] = useState(info.emailAddress);

  const [edit, setEdit] = useState({});

  // handle submission of form
  const handleSubmit = (event) => {
    // save new data to info
    setInfo([
      ...info,
      {
        firstName: firstName,
        lastName: lastName,
        age: age,
        contactNumber: contactNumber,
        emailAddress: emailAddress,
      },
    ]);

    console.log(`Added ${firstName} files`);
    event.preventDefault();
  };

  useEffect(() => {
    console.log(`Editing ${edit.firstName} files`);
  }, [edit]);

  return (
    <>
      <DataListing data={info} setEdit={setEdit} />
      {edit.firstName ? (
        <div className="w-[35%] mt-[20px] mx-auto bg-[#fff7ee] px-[10px]">
          <h1 className="text-center mt-[0]">{edit.firstName}'s File</h1>
          <div className="justify-between flex my-[10px]">
            First Name: {edit.firstName}
          </div>
          <div className="justify-between flex my-[10px]">
            Last Name: {edit.lastName}
          </div>
          <div className="justify-between flex my-[10px]">Age: {edit.age}</div>
          <div className="justify-between flex my-[10px]">
            Contact Number: {edit.contactNumber}
          </div>
          <div className="justify-between flex my-[10px]">
            Email Address: {edit.emailAddress}
          </div>
          <button className="w-full">Edit</button>
        </div>
      ) : (
        ""
      )}

      <form
        className="w-[35%] mt-[20px] grid mx-auto bg-[#fff7ee] border-t-solid px-[10px]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-center mt-[0]">Input Info</h1>
        <label className="justify-between flex my-[10px]">
          First Name:
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            defaultValue={info.firstName}
            placeholder="Enter your first name"
          />
        </label>

        <label className="justify-between flex my-[10px]">
          Last Name:
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            defaultValue={info.lastName}
            placeholder="Enter your last name"
          />
        </label>

        <label className="justify-between flex my-[10px]">
          Age:
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            defaultValue={info.age}
            placeholder="Enter your age"
          />
        </label>

        <label className="justify-between flex my-[10px]">
          Contact Number:
          <input
            type="number"
            onChange={(e) => setContactNumber(e.target.value)}
            defaultValue={info.contactNumber}
            placeholder="Enter your mobile number"
          />
        </label>

        <label className="justify-between flex my-[10px]">
          Email Address:
          <input
            type="email"
            onChange={(e) => setEmailAddress(e.target.value)}
            defaultValue={info.emailAddress}
            placeholder="Enter your email address"
          />
        </label>
        <button>Save</button>
      </form>
    </>
  );
};

const DataListing = ({ data, setEdit }) => {
  return (
    <>
      {data.length ? (
        <div className="w-[35%] mx-auto bg-[#fff7ee] flex justify-between px-[10px] !block">
          {data.map((info, key) => (
            <div key={key} className="flex justify-between">
              <div className="flex justify-between w-full">
                {info.firstName} {info.lastName}
                <button onClick={() => setEdit(info)}>Option</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        "walang laman"
      )}
    </>
  );
};

export default Form;
