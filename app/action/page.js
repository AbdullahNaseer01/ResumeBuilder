"use client";
import React from "react";
import { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { PiBagFill } from "react-icons/pi";
import { BiAddToQueue } from "react-icons/bi";
import {
  IoMdSchool,
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import Resume from "../components/Resume";

const Page = () => {
  //***********/ Toggled states of form //**********/
  const [isEducationToggled, setIsEducationToggled] = useState(false);
  const [isExperienceToggled, setIsExperienceToggled] = useState(false);
  const [isSkillsToggled, setIsSkillsToggle] = useState(false);

//******************* form inetial states ************************
const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const [educationfield, setEducationField] = useState([
    { degree: "", school: "" },
  ]);
  const [expriencefield, setExprienceField] = useState([
    { title: "", company: "" },
  ]);
  const [skillsField, setSkillsField] = useState([{ skill: "" }]);

  // ********** handle toggled state functions //***************
  const handleSkillsToggle = () => {
    event.preventDefault();
    setIsSkillsToggle(!isSkillsToggled);
  };

  const handleEducationToggle = () => {
    event.preventDefault();
    setIsEducationToggled(!isEducationToggled);
  };

  const handleExperienceToggle = () => {
    event.preventDefault();
    setIsExperienceToggled(!isExperienceToggled);
  };

  // ********** handle change functions *************

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleFormChange = (event, index) => {
    event.preventDefault();
    console.log(index, event.target.name);
    let data = [...educationfield];
    data[index][event.target.name] = event.target.value;
    setEducationField(data);
  };

  const handleExprienceChange = (event, index) => {
    event.preventDefault();
    console.log(index, event.target.name);
    let data = [...expriencefield];
    data[index][event.target.name] = event.target.value;
    setExprienceField(data);
  };

  const handleSkillsChange = (event, index) => {
    event.preventDefault();
    console.log(index, event.target.name);
    let data = [...skillsField];
    data[index][event.target.name] = event.target.value;
    setSkillsField(data);
  };

  // ********* Add more Fields Functions *****************

  const addSkillsFields = () => {
    event.preventDefault();
    let object = {
      skill: "",
    };
    setSkillsField([...skillsField, object]);
  };
  const addEducationFields = () => {
    event.preventDefault();
    let object = {
      degree: "",
      school: "",
    };
    setEducationField([...educationfield, object]);
  };
  const addExprienceFields = () => {
    event.preventDefault();
    let object = {
      title: "",
      company: "",
    };
    setExprienceField([...expriencefield, object]);
  };

  //  ******* remove fields functions ***********
  const removeSkillsField = (index) => {
    event.preventDefault();

    if (skillsField.length > 1) {
      let data = [...skillsField];
      data.splice(index, 1);
      setSkillsField(data);
    }
  };
  const removeEducationField = (index) => {
    event.preventDefault();
    if (educationfield.length > 1) {
      console.log(index);
      let data = [...educationfield];
      data.splice(index, 1);
      setEducationField(data);
    }
  };
  const removeExprienceField = (index) => {
    event.preventDefault();

    if (expriencefield.length > 1) {
      console.log(index);
      let data = [...expriencefield];
      data.splice(index, 1);
      setExprienceField(data);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., send to a server, update state, etc.
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Title:', title);
    console.log('About:', about);
    console.log('Email:', email);
    console.log('phoneNumber', phoneNumber)
  };


  
  return (
    <>
      <div className="action bg-slate-200 min-h-screen">
        <div className=" container mx-auto w-full">
          <div className="w-full bg-rose-200">
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
                      value={firstName}
                      onChange={handleFirstNameChange}
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
                      value={lastName}
                      onChange={handleLastNameChange}
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
                      value={title}
                      onChange={handleTitleChange}
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
                      value={about}
                      onChange={handleAboutChange}
                      id="about"
                      rows={2}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      value={email}
                      onChange={handleEmailChange}
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
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      id="phone-number"
                      className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={handleEducationToggle}
                className="flex mx-auto mt-16 "
              >
                Add Education <IoMdSchool />
                {isEducationToggled ? (
                  <IoIosArrowDropupCircle />
                ) : (
                  <IoIosArrowDropdownCircle />
                )}
              </button>
              {educationfield.map((form, index) => {
                return (
                  <div
                    key={index}
                    className={`${isEducationToggled ? "" : "hidden"}`}
                  >
                    <div
                      className={`sm:col-span-2 mx-auto max-w-xl border-slate-400 border-2 rounded-lg box-border relative`}
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

                      <button onClick={()=>{}}>Save</button>
                    </div>
                    <button onClick={addEducationFields} className="flex">
                      Add More
                      <BiAddToQueue />
                    </button>
                  </div>
                );
              })}
              <button
                onClick={handleExperienceToggle}
                className="flex mx-auto mt-16 "
              >
                Add Exprience <PiBagFill />
                {isExperienceToggled ? (
                  <IoIosArrowDropupCircle />
                ) : (
                  <IoIosArrowDropdownCircle />
                )}
              </button>
              {expriencefield.map((form, index) => {
                return (
                  <div
                    key={index}
                    className={`${isExperienceToggled ? "" : "hidden"}`}
                  >
                    <div
                      className={`sm:col-span-2 mx-auto max-w-xl border-slate-400 border-2 rounded-lg box-border relative`}
                    >
                      <button
                        onClick={() => {
                          removeExprienceField(index);
                        }}
                        className=" absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  border-white rounded-full -top-4 -right-0 drop-shadow-lg"
                      >
                        X
                      </button>
                      <div>
                        <label
                          htmlFor="position"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Title/Position
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="position"
                            id="position"
                            // value={form.degree}
                            onChange={(event) => handleExprienceChange(event, index)}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Organization/Company
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="company"
                            id="company"
                            // value={form.school}
                            onChange={(event) => handleExprienceChange(event, index)}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="md:flex">
                        <div className="md:mr-2">
                          <label
                            htmlFor="ExpStrDate"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Start Date
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="date"
                              name="ExpStrDate"
                              id="startDate"
                              // value={form.degree}
                              onChange={(event) =>
                                handleExprienceChange(event, index)
                              }
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="ExpEndDate"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            End Date
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="date"
                              name="ExpEndDate"
                              id="ExpEndDate"
                              // value={form.degree}
                              onChange={(event) =>
                                handleExprienceChange(event, index)
                              }
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>

                      <button onClick={()=>{}}>Save</button>
                    </div>
                    <button onClick={addExprienceFields} className="flex">
                      Add More
                      <BiAddToQueue />
                    </button>
                  </div>
                );
              })}

              {/* add skills */}

              <button
                onClick={handleSkillsToggle}
                className="flex mx-auto mt-16"
              >
                Add Skills <BiAddToQueue />
                {isSkillsToggled ? (
                  <IoIosArrowDropupCircle />
                ) : (
                  <IoIosArrowDropdownCircle />
                )}
              </button>
              {skillsField.map((form, index) => {
                return (
                  <div
                    key={index}
                    className={`${isSkillsToggled ? "" : "hidden"}`}
                  >
                    <div
                      className={`sm:col-span-2 mx-auto max-w-xl border-slate-400 border-2 rounded-lg box-border relative`}
                    >
                      <button
                        onClick={() => {
                          removeSkillsField(index);
                        }}
                        className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-white rounded-full -top-4 -right-0 drop-shadow-lg"
                      >
                        X
                      </button>
                      <div>
                        <label
                          htmlFor="skill"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Skill
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="skill"
                            id="skill"
                            value={form.skill}
                            onChange={(event) =>
                              handleSkillsChange(event, index)
                            }
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <button onClick={()=>{}}>Save</button>
                    </div>
                    <button onClick={addSkillsFields} className="flex">
                      Add More
                      <BiAddToQueue />
                    </button>
                  </div>
                );
              })}
            </form>
            <button onClick={handleSubmit}>Save</button>


          </div>
        
          <Resume/>
        </div>
      </div>
    </>
  );
};

export default Page;
