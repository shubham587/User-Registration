import { useState } from "react";
import Button from "../UI/Button/Button";
import InputLable from "../UI/InputLabel/InputLabel";
import styles from "./Form.module.css";
const Form = ({onGetData}) => {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    onGetData(formData);
    setFormData({
      username: "",
      age: "",
    });
  };

  const formValueHandler = (val, type) => {
    if (type === "username") {
      setFormData({
        ...formData,
        username: val,
      });
    } else {
      setFormData({
        ...formData,
        age: val,
      });
    }
  };

  return (
    <>
      <form className={styles["Form"]} onSubmit={submitHandler}>
        <div className={styles["form-input"]}>
          <InputLable
            inputName="Username"
            inputMsg="Enter username"
            inputType="text"
            val={formData.username}
            onInputChange={(val) => {
              formValueHandler(val, "username");
            }}
          />
          <InputLable
            inputName="Age (Years)"
            inputMsg="Enter your age"
            inputType="number"
            val={formData.age}
            onInputChange={(val) => {
              formValueHandler(val, "age");
            }}
          />
        </div>
        <div className={styles["form-btn"]}>
          <Button btnType="submit" />
        </div>
      </form>
    </>
  );
};
export default Form;
