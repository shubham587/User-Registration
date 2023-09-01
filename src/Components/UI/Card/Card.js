import styles from './Card.module.css'
const Card = ({newUserName, newAge }) => {
    return(
        <>
            <div className={styles["card"]}>
                <p>{`${newUserName} (${newAge} years old)`}</p>
            </div>
        </>
    )
}
export default Card