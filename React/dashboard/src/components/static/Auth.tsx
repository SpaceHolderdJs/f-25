import React, { useState } from "react";
import { FlexColumn } from "../shared/Flex";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Auth = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [_, setLocalStorageFormData] =
    useLocalStorage("userData");

  const onSubmit = () => {
    setLocalStorageFormData(formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <FlexColumn width="100%" alignItems="center">
      <input
        type="text"
        placeholder="email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <button onClick={onSubmit}>Submit</button>
    </FlexColumn>
  );
};
