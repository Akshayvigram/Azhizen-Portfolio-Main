import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';
import { getDatabase, ref, set } from 'firebase/database'; // Import RTDB modules

const JobApplicationForm = () => {
  const location = useLocation();
  const { job } = location.state || {};
  if (!job) return <div>No job information available.</div>;

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeBase64, setResumeBase64] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', role: '', years: '' }]);
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institution: '', degree: '', year: '' }]);
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeBase64(reader.result); // Base64 string with data URI
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formFields = {
      firstName: document.querySelector('input[placeholder="First name"]').value,
      lastName: document.querySelector('input[placeholder="Last name"]').value,
      email: document.querySelector('input[placeholder="Email"]').value,
      confirmEmail: document.querySelector('input[placeholder="Confirm Email"]').value,
      residence: document.querySelector('input[placeholder="Place of Residence"]').value,
      phone: document.querySelector('input[placeholder="Phone number"]').value,
      linkedIn: document.querySelector('input[placeholder*="linkedin"]').value,
      portfolio: document.querySelector('input[placeholder*="portfolio"]')?.value || '',
      message: document.querySelector('textarea')?.value || '',
    };

    if (
      !formFields.firstName ||
      !formFields.lastName ||
      !formFields.email ||
      !formFields.confirmEmail ||
      !formFields.residence ||
      !formFields.phone
    ) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    if (formFields.email !== formFields.confirmEmail) {
      setError('Emails do not match.');
      setLoading(false);
      return;
    }

    if (!resumeBase64) {
      setError('Please upload your resume.');
      setLoading(false);
      return;
    }

    try {
      // Firestore document creation
      await addDoc(collection(db, 'jobApplications'), {
        jobTitle: job.title,
        ...formFields,
        experience,
        education,
        resume: resumeBase64,
        appliedAt: Timestamp.now(),
      });

      // Firebase Realtime Database document creation
      const dbRef = getDatabase();
      const applicationRef = ref(dbRef, 'jobApplications/' + Timestamp.now().seconds);
      await set(applicationRef, {
        jobTitle: job.title,
        ...formFields,
        experience,
        education,
        resume: resumeBase64,
        appliedAt: Timestamp.now().seconds,
      });

      alert('Application submitted successfully!');
      setExperience([]);
      setEducation([]);
      setResumeFile(null);
      setResumeBase64('');
      document.querySelectorAll('input, textarea').forEach((input) => (input.value = ''));
    } catch (error) {
      console.error('Submission failed:', error);
      setError('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4 mt-35">
      <div className="w-full max-w-5xl bg-white p-4 sm:p-6 lg:p-12">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-medium text-black mb-6">{job.title}</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Personal Info */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Personal Information</h2>
          <p className="text-sm text-gray-500 mb-4">Fields marked with * are required.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['First name', 'Last name', 'Email', 'Confirm Email', 'Place of Residence'].map((label, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}*</label>
                <input
                  type={label.toLowerCase().includes('email') ? 'email' : 'text'}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={label}
                  required
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone number*</label>
              <div className="flex gap-4">
                <select className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>+91</option>
                  <option>+1</option>
                </select>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resume Upload */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Resume*</h2>
          <div className="w-full border-2 border-dashed border-blue-300 bg-white-50 p-6 sm:p-8 rounded-md text-center text-sm">
            <label htmlFor="resume-upload" className="cursor-pointer text-blue-600 hover:underline">
              Choose a file <span className="text-black"> to drop here</span>
            </label>
            <input
              id="resume-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleResumeChange}
            />
            {resumeFile && <p className="text-sm mt-2 text-green-700">Selected: {resumeFile.name}</p>}
            <p className="text-xs text-black-400 mt-2">10 mb size limit</p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Experience</h2>
            <button
              onClick={handleAddExperience}
              className="text-blue-500 border px-3 py-1 rounded-md hover:bg-blue-50"
            >
              + Add
            </button>
          </div>
          {experience.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <input
                className="p-2 border rounded-md"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
              />
              <input
                className="p-2 border rounded-md"
                placeholder="Role"
                value={exp.role}
                onChange={(e) => handleExperienceChange(index, 'role', e.target.value)}
              />
              <input
                className="p-2 border rounded-md"
                placeholder="Years"
                value={exp.years}
                onChange={(e) => handleExperienceChange(index, 'years', e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Education</h2>
            <button
              onClick={handleAddEducation}
              className="text-blue-500 border px-3 py-1 rounded-md hover:bg-blue-50"
            >
              + Add
            </button>
          </div>
          {education.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <input
                className="p-2 border rounded-md"
                placeholder="Institution"
                value={item.institution}
                onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
              />
              <input
                className="p-2 border rounded-md"
                placeholder="Degree"
                value={item.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
              />
              <input
                className="p-2 border rounded-md"
                placeholder="Year"
                value={item.year}
                onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Profiles */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Your Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="url" className="p-3 border rounded-md" placeholder="https://yourportfolio.com" />
            <input
              type="url"
              className="p-3 border rounded-md"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Message to the Hiring Team</h2>
          <textarea
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="I'm excited about this opportunity because..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full sm:w-auto rounded bg-gradient-to-br from-[#0078B4] to-[#00B4D9] text-white px-6 py-3 hover:brightness-110 transition text-base sm:text-lg font-medium ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Submitting...' : 'Apply'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
