import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [info, setInfo] = useState({
    firstName: "Trong",
    lastName: "Phong",
  });
  useEffect(() => {
    console.log("from input");
  }, [info.firstName]);
  return (
    <div className="flex items-center p-5 gap-x-4 ">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
      />
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 text-white bg-green-400"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
