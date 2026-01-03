const Homepage = ({ userdata }) => {
  return (
    <div>
      <h1 className="user">user : {userdata ? userdata.name : "Guest"}</h1>

      <h1>React & DevOps Learning Hub</h1>
      <p>
        This project is created to practice React concepts such as routing,
        components, and state management while connecting them with DevOps
        fundamentals.
      </p>

      <h2>What You’ll Learn</h2>
      <ul>
        <li>React Router and navigation</li>
        <li>Component-based architecture</li>
        <li>CI/CD pipeline basics</li>
        <li>Frontend deployment strategies</li>
      </ul>

      <p>
        The goal is to simulate a real-world application that can be built,
        tested, and deployed using DevOps tools.
      </p>
    </div>
  );
};

export default Homepage;
