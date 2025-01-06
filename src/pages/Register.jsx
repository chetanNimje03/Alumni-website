import React from "react";

function Register() {
  return (
    <div style={{ backgroundColor: "#121212", color: "#ffffff", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Student & Alumni Registration Form</h1>
      <p style={{ textAlign: "center" }}>Please fill out the form with the required information</p>

      <form style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "8px" }}>
        <fieldset style={{ border: "1px solid #333", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
          <legend>General Information</legend>
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your full name" style={inputStyle} />

          <label>Email Address:</label>
          <input type="email" placeholder="Enter your email address" style={inputStyle} />

          <label>Create Password:</label>
          <input type="password" placeholder="Must be at least 8 characters" style={inputStyle} />

          <label>Upload Profile Picture:</label>
          <input type="file" style={inputStyle} />

          <label>Age:</label>
          <input type="number" placeholder="Enter your age" style={inputStyle} />

          <label>Gender:</label>
          <div>
            <input type="radio" id="male" name="gender" value="Male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name="gender" value="Other" />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>

        <fieldset style={{ border: "1px solid #333", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
          <legend>Account Type</legend>
          <input type="radio" id="student" name="accountType" value="Student" />
          <label htmlFor="student">Student</label>
          <input type="radio" id="alumni" name="accountType" value="Alumni" />
          <label htmlFor="alumni">Alumni</label>
        </fieldset>

        <fieldset style={{ border: "1px solid #333", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
          <legend>Student Details</legend>
          <label>Enrollment Number:</label>
          <input type="text" placeholder="Enter your enrollment number" style={inputStyle} />

          <label>Department:</label>
          <select style={inputStyle}>
            <option>Select one</option>
            <option>Computer Science</option>
            <option>Electronics</option>
            <option>Mechanical</option>
            {/* Add more departments as needed */}
          </select>

          <label>Year of Study:</label>
          <select style={inputStyle}>
            <option>Select one</option>
            <option>First Year</option>
            <option>Second Year</option>
            <option>Third Year</option>
            <option>Final Year</option>
          </select>

          <label>Academic Interests:</label>
          <textarea placeholder="Describe your areas of interest" style={textAreaStyle}></textarea>
        </fieldset>

        <fieldset style={{ border: "1px solid #333", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
          <legend>Alumni Details</legend>
          <label>Graduation Year:</label>
          <input type="text" placeholder="Enter your graduation year" style={inputStyle} />

          <label>Job Title:</label>
          <input type="text" placeholder="Enter your job title" style={inputStyle} />

          <label>Current Organization:</label>
          <input type="text" placeholder="Enter your organization" style={inputStyle} />

          <label>LinkedIn Profile:</label>
          <input type="url" placeholder="Enter your LinkedIn URL" style={inputStyle} />

          <label>Areas of Expertise:</label>
          <textarea placeholder="List your areas of expertise" style={textAreaStyle}></textarea>
        </fieldset>

        <fieldset style={{ border: "1px solid #333", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
          <legend>Mentorship</legend>
          <label>Are you interested in mentoring?</label>
          <div>
            <input type="radio" id="yes" name="mentoring" value="Yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="mentoring" value="No" />
            <label htmlFor="no">No</label>
          </div>
          <textarea placeholder="Skills or topics you'd like to mentor or learn about" style={textAreaStyle}></textarea>
        </fieldset>

        <div>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "8px",
  margin: "8px 0",
  backgroundColor: "#333",
  color: "#fff",
  border: "1px solid #555",
  borderRadius: "4px",
};

const textAreaStyle = {
  display: "block",
  width: "100%",
  padding: "8px",
  margin: "8px 0",
  backgroundColor: "#333",
  color: "#fff",
  border: "1px solid #555",
  borderRadius: "4px",
  minHeight: "80px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 15px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "15px",
};

export default Register;
