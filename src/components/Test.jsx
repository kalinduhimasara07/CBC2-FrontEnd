import { useState } from "react";

export default function Test() {
  const [name, setName] = useState("Student");
  function changeName(name) {
    setName(name);
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => changeName("Student")}>Student</button>
      <button onClick={() => changeName("Teachers")}>Teachers</button>
      <button onClick={() => changeName("Admin")}>Admin</button>
    </div>
  );
}
