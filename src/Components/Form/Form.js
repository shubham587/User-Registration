import Button from "../UI/Button/Button";
import InputLable from "../UI/InputLabel/InputLabel";
import styles from "./Form.module.css";
const Form = () => {
  const submitHandler = (event) => {
    event.preventDefault()
    
  };

  return (
    <>
      <form className={styles["Form"]} onSubmit={submitHandler}>
        <div className={styles["form-input"]}>
          <InputLable
            inputName="Username"
            inputMsg="Enter username"
            inputType="text"
          />
          <InputLable
            inputName="Age (Years)"
            inputMsg="Enter your age"
            inputType="number"
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
