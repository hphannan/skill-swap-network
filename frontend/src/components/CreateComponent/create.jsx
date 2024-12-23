import React, { useState, useEffect } from 'react';
import skill from './create.module.css';
import { useNavigate } from 'react-router-dom';
import trackUserAction from '../../utils/trackUserAction.js';
import { getUserIdFromSession,handleAuth } from '../../utils/authUtils.js'
import axios from 'axios';

const MySkills = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userId = getUserIdFromSession() || "";
  const [isCreated, setIsCreated] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    duration: '',
    requirements: '',
    availability: [],
    user: userId,
    image:''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create FormData and append all fields
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("duration", formData.duration);
      data.append("requirements", formData.requirements);
      data.append("user", formData.user);
      data.append("availability", JSON.stringify(formData.availability));
      data.append("image", formData.image); // Append the image file

      const response = await axios.post("http://localhost:5000/api/skills", data, {
        headers: {
          "Content-Type": "multipart/form-data", // Set proper content type for file uploads
        },
      });

      console.log("Skill created:", response.data);

      // Log user action
      trackUserAction("Skill created tracking");

      // Show popup
      setIsCreated(true);

      // Hide popup after 3 seconds
      setTimeout(() => {
        setIsCreated(false);
      }, 3000);
    } catch (error) {
      console.error(
        "Error creating skill:",
        error.response?.data || error.message
      );
    }
  };



  return (
    <div>
      <div className={skill.skill_banner}>
        <div className={skill.skill_navbar}>
          <img src="/images/logo.png" alt="Logo" className={skill.logo} />
          <ul>
            <li> <a href="/">Home</a></li>
            <li> <a className={skill.active} href="create">create skill listening</a></li>
            <li> <a href="myskill">My Skill </a></li>
            <li> <a href="myswaps">Skill swaps</a></li>
            <li> <a href="about">about us </a></li>
            <li> <a href="contact">Contact us</a></li>
            <li> <a href="/user/profile">Profile</a></li>
          </ul>
        </div>
        <div className={skill.skill_content}>
          <h1>MY Skills</h1>
        </div>
      </div>
      <br />
      <br />
      <div class={skill.form_container}>
        <h2 class={skill.form_title}>📚 Create New Skill Listing</h2>
        <p class={skill.form_subtitle}>Share your expertise with others by creating a new skill listing</p>

        <form class={skill.skill_form} onSubmit={handleSubmit}>

          <div class={skill.form_group}>
            <label for="name">* Name</label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              placeholder="E.g., Piano Lessons"
              value={formData.name}
            />
          </div>

          <div class={skill.form_group}>
            <label for="description">* Description</label>
            <input
              type="text"
              id="description"
              value={formData.description}
              placeholder="Describe what you'll teach..."
              onChange={handleChange}
            />
          </div>


          <div className={skill.form_group}>
            <div className={skill.form_row}>
              {/* Duration Input */}
              <div>
                <label htmlFor="duration">* Duration (hours)</label>
                <input
                  type="number"
                  id="duration"
                  value={formData.duration}
                  placeholder="0"
                  onChange={handleChange}
                />
              </div>

              {/* Category Dropdown */}
              <div>
                <label htmlFor="category">* Category</label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="technology">Technology</option>
                  <option value="music">Music</option>
                  <option value="arts">Arts</option>
                </select>
              </div>
            </div>
          </div>



          <div className={skill.form_group}>
            <label htmlFor="requirements">Requirements</label>
            <textarea
              id="requirements"
              value={formData.requirements}
              placeholder="Any prerequisites or materials needed..."
              onChange={handleChange}
            ></textarea>
          </div>



          <div className={skill.form_group}>
            <label htmlFor="availability">📅 Availability</label>
            <div className={skill.availability}>
              {/* Day Dropdown */}
              <select
                id="day"
                value={formData.day || ''}
                onChange={(e) => setFormData({ ...formData, day: e.target.value })}
              >
                <option value="" disabled>
                  Day
                </option>
                {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                  <option key={day} value={day}>
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </option>
                ))}
              </select>

              {/* Start Time Dropdown */}
              <select
                id="startTime"
                value={formData.startTime || ''}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
              >
                <option value="" disabled>
                  Start Time
                </option>
                {Array.from({ length: 24 }, (_, i) => {
                  const time = `${i.toString().padStart(2, '0')}:00`;
                  return (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  );
                })}
              </select>

              {/* End Time Dropdown */}
              <select
                id="endTime"
                value={formData.endTime || ''}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
              >
                <option value="" disabled>
                  End Time
                </option>
                {Array.from({ length: 24 }, (_, i) => {
                  const time = `${i.toString().padStart(2, '0')}:00`;
                  return (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  );
                })}
              </select>

              {/* Add Time Slot Button */}
              <button
                type="button"
                className={skill.add_time_slot}
                onClick={() => {
                  if (formData.day && formData.startTime && formData.endTime) {
                    const newSlot = {
                      day: formData.day,
                      startTime: formData.startTime,
                      endTime: formData.endTime,
                    };
                    setFormData({
                      ...formData,
                      availability: [...formData.availability, newSlot],
                    });
                  } else {
                    alert("Please select a day, start time, and end time.");
                  }
                }}
              >
                + Add Time Slot
              </button>
            </div>

            {/* Display Added Slots */}
            <div className={skill.added_slots}>
              {formData.availability?.map((slot, index) => (
                <div key={index} className={skill.slot}>
                  <span>
                    {/* Check if 'day' exists before accessing charAt */}
                    {slot.day ? `${slot.day.charAt(0).toUpperCase() + slot.day.slice(1)}: ${slot.startTime} - ${slot.endTime}` : "Invalid Slot"}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        availability: formData.availability.filter((_, i) => i !== index),
                      })
                    }
                  >
                    ❌ Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className={skill.form_group}>
            <label htmlFor="image">* Upload Gig Image</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
            />
          </div>

          <button type="submit" class={skill.submit_button}>📝 Create Skill Listing</button>
          {isCreated && (
            <div className="popup">Skill created successfully! 🎉</div>
          )}
        </form>
      </div>
      <br />
      <br />


      <footer>
        <div className={skill.skill_footer_col}>
          <h3>Top Products</h3>
          <li>Manage Reputation</li>
          <li>Power Tools</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </div>
        <div className={skill.skill_footer_col}>
          <h3>Quick Links</h3>
          <li>Jobs</li>
          <li>Brand Assets</li>
          <li>Investor Relations</li>
          <li>Terms of Service</li>
        </div>
        <div className={skill.skill_footer_col}>
          <h3>Features</h3>
          <li>Manage Reputation</li>
          <li>Power Tools</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </div>
        <div className={skill.skill_footer_col}>
          <h3>Resources</h3>
          <li>Guides</li>
          <li>Research</li>
          <li>Experts</li>
          <li>Marketing Service</li>
        </div>
        <div className={skill.skill_footer_col}>
          <h3>Newsletter</h3>

        </div>
        <div className={skill.skill_copyright}>
          <p>Copyright © 2023 | All Rights Reserved | This template is made by Eduquest.edu.pk</p>
        
        </div>
      </footer>
    </div>
  );
};

export default MySkills;
