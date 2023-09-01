import styles from "./InputLable.module.css";
const InputLable = ({ inputName, inputMsg, inputType, val, onInputChange }) => {
  const changeHandler = (event) => {
    onInputChange(event.target.value);
  };
  return (
    <>
      <div className={styles["form-input"]}>
        <label>{inputName}</label>
        <input
          placeholder={inputMsg}
          type={inputType}
          value={val}
          onChange={changeHandler}
          required
        />
      </div>
    </>
  );
};
export default InputLable;
