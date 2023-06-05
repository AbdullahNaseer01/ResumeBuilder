"use client";
import React from "react";
import { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { BiAddToQueue } from "react-icons/bi";
import {
  IoMdSchool,
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const Page = () => {
  const [educationfield, setEducationField] = useState([
    { degree: "", school: "" },
  ]);
  const handleFormChange = (event, index) => {
    // console.log(index, event.target.name);
    let data = [...educationfield];
    data[index][event.target.name] = event.target.value;
    setEducationField(data);
  };
  const [isToggled, setIsToggled] = useState(false);

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
    // e.preventdefault()

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
                      className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <button onClick={handleToggle} className="flex mx-auto mt-16 ">
                Add Education <IoMdSchool />{" "}
                {isToggled ? (
                  <IoIosArrowDropupCircle />
                ) : (
                  <IoIosArrowDropdownCircle />
                )}
              </button>
              {educationfield.map((form, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`sm:col-span-2 mx-auto max-w-xl border-slate-400 border-2 rounded-lg box-border relative ${
                        isToggled ? "" : "hidden"
                      }`}
                    >
                      <button
                        onClick={() => {
                          removeEducationField(index);
                        }}
                        className=" absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  border-white rounded-full -top-4 -right-0 drop-shadow-lg"
                      >
                        X
                      </button>
                      <div>
                        <label
                          htmlFor="degree"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Degree
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="degree"
                            id="degree"
                            value={form.degree}
                            onChange={(event) => handleFormChange(event, index)}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="school"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          School
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="school"
                            id="school"
                            value={form.school}
                            onChange={(event) => handleFormChange(event, index)}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="md:flex">
                        <div className="md:mr-2">
                          <label
                            htmlFor="startDate"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Start Date
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="date"
                              name="startDate"
                              id="startDate"
                              // value={form.degree}
                              onChange={(event) =>
                                handleFormChange(event, index)
                              }
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="endDate"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            End Date
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="date"
                              name="endDate"
                              id="endDate"
                              // value={form.degree}
                              onChange={(event) =>
                                handleFormChange(event, index)
                              }
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>

                      <button onClick={submit}>Save</button>
                    </div>
                    <button onClick={addEducationFields} className="flex">
                      Add More
                      <BiAddToQueue />
                    </button>
                  </div>
                );
              })}
            </form>
          </div>
          <div className="w-full bg-red-300 sm:w-1/2 ">Resume</div>
        </div>
      </div>
    </>
  );
};

export default Page;
