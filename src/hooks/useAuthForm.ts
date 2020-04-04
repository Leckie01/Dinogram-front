import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { changeField } from "../reducers/auth";

type IFormType = "login" | "register";

const useLoginForm = (formType: IFormType) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }: RootState) => ({
    form: auth[formType]
  }));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: formType, key: name, value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return { form, onChange, onSubmit };
};

export default useLoginForm;
