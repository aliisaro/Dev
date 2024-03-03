import { useState } from "react";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const SignUpInfo = {
      email,
      password,
      nationality,
    };

    console.log(SignUpInfo);
    setEmail("");
    setPassword("");
    setNationality("");
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <label htmlFor="nationality">Nationality:</label>
          <select
            name="nationality"
            onChange={(e) => setNationality(e.target.value)}
            value={nationality}
          >
            <option value="" disabled>
              Select a nationality...
            </option>
            <option value="en">England</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignupPage;
