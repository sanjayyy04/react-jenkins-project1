import { useState } from "react";
import React from "react";

const Contectpage = ({ setuserdata }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
    // e.target.reset();
    setuserdata(details);
  };

  const [details, setdetails] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setdetails((prew) => {
      return {
        ...prew,
        [name]: value,
      };
    });
  };

  return (
    <div className="contect-form">
      <h1>Contect Form</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={details.name}
                  onChange={handleOnChange}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="phone">Phone:</label>
              </td>
              <td>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={details.phone}
                  onChange={handleOnChange}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="email">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={details.email}
                  onChange={handleOnChange}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="city">City:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={details.city}
                  onChange={handleOnChange}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <input type="reset" value="Cancel" />
              </td>
              <td>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {/* <h1>{details.name}</h1> */}
    </div>
  );
};

export default Contectpage;
