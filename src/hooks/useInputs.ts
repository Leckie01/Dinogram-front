import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { changeField } from "../reducers/auth";
import { useState, ChangeEvent, useCallback } from "react";

// export type IFormType = "login" | "register";

const useInputs = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  }, []);
  return { value, onChange };
};

export default useInputs;
