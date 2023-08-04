"use client"
import React, { createContext, useState } from "react";

// Create the context
const FormDataContext = createContext();

// Create a context provider component
const FormDataProvider = ({ children }) => {
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
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Title:", title);
    console.log("About:", about);
    console.log("Email:", email);
    console.log("phoneNumber", phoneNumber);
  };

  const FormDataContextValue = {
    isEducationToggled,
    setIsEducationToggled,
    isExperienceToggled,
    setIsExperienceToggled,
    isSkillsToggled,
    setIsSkillsToggle,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    title,
    setTitle,
    about,
    setAbout,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    handleSubmit,
    handleAboutChange,
    handleEducationToggle,
    handleEmailChange,
    handleExperienceToggle,
    handleExprienceChange,
    handleFirstNameChange,
    handleFormChange,
    handleLastNameChange,
    handlePhoneNumberChange,
    handleSkillsChange,
    handleSkillsToggle,
    handleTitleChange,
  };
  return (
    <FormDataContext.Provider value={FormDataContextValue}>{children}</FormDataContext.Provider>
  );
};

export { FormDataContext, FormDataProvider };
