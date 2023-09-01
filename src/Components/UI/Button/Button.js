import styles from './Button.module.css'
const Button = ({btnType}) => {
    return(
        <>
            <div className={styles["btn-submit"]}>
                <button type={btnType} className={styles["btn"]}>Add User</button>
            </div>
        </>
    )
}
export default Button