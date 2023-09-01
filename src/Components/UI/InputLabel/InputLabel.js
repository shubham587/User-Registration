import styles from './InputLable.module.css'
const InputLable = ({inputName, inputMsg, inputType}) => {
    return(
        <>
            <div className={styles["form-input"]}>
                <lable>{inputName}</lable>
                <input placeholder={inputMsg} type={inputType}  required/>
            </div>
        </>
    )
}
export default InputLable