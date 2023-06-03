"use client"; 
import React from "react";
import { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { BiAddToQueue } from "react-icons/bi";
import { IoMdSchool } from "react-icons/io";

const Page = () => {
  const [educationfield, setEducationField] = useState([
    { degree: "aaa", school: "aaa" },
  ]);
  const handleFormChange = (event, index) => {
    // console.log(index, event.target.name);
    let data = [...educationfield];
    data[index][event.target.name] = event.target.value;
    setEducationField(data);
  };
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const submit = () => {
    console.log(educationfield);
  };
  const addEducationFields = () => {
    let object = {
      degree: "",
      school: "",
    };
    setEducationField([...educationfield, object]);
  };
  // const removeEducationField = (index) => {
  //   if(index >= 0){
  //     console.log(index);
  //     let data = [...educationfield];
  //     data.splice(index, 1);
  //     setEducationField(data);
  //   }
  // };
  const removeEducationField = (index) => {
    if (educationfield.length > 1) {
      console.log(index);
      let data = [...educationfield];
      data.splice(index, 1);
      setEducationField(data);
    }
  };
  
  return (
    <>
      <div className="action bg-slate-200 min-h-screen">
        <div className=" container mx-auto w-full sm:flex">
          <div className="w-full bg-rose-200 sm:w-1/2">
            <form
              action="#"
              method="POST"
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    title
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/*  */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="about"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    About/Discription
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="about"
                      id="about"
                      rows={2}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* {educationfield.map((form, index) => {
                  return (
                    <div key={index} className="sm:col-span-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Degree
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="degree"
                            id="degree"
                            autoComplete="given-name"
                            value={form.degree}
                            onChange={(event) => handleFormChange(event, index)}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    School
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="school"
                      id="school"
                      autoComplete="given-name"
                      value={form.school}
                            onChange={(event) => handleFormChange(event, index)}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>


                      <button onClick={submit}>Add Education</button>
                      <button onClick={addEducationFields}>Add More</button>

                    </div>
                  );
                })} */}
              </div>
              {/* <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div> */}
            </form>
            <button onClick={handleToggle} className="flex">
              Add Education <IoMdSchool />{" "}
            </button>
            {educationfield.map((form, index) => {
              return (
                <div
                  key={index}
                  className={`sm:col-span-2 mx-auto max-w-xl ${
                    isToggled ? "hidden" : ""
                  }`}
                >
                  <button
                    onClick={() => {
                      removeEducationField(index);
                    }}
                    className="flex"
                  >
                    Remove
                    <CiSquareRemove />
                  </button>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Degree
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="degree"
                        id="degree"
                        autoComplete="given-name"
                        value={form.degree}
                        onChange={(event) => handleFormChange(event, index)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      School
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="school"
                        id="school"
                        autoComplete="given-name"
                        value={form.school}
                        onChange={(event) => handleFormChange(event, index)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <button onClick={submit}>Submit Education</button>
                  <button onClick={addEducationFields}>
                    <BiAddToQueue />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="w-full bg-red-300 sm:w-1/2 ">Resume</div>
        </div>
      </div>
    </>
  );
};

export default Page;
