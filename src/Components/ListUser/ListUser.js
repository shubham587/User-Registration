import Card from '../UI/Card/Card'
import styles from './ListUser.module.css'
const ListUser = () => {
    return(
        <>
            <div className={styles["list-user"]}>
                <Card newUserName="shubham" newAge="23"/>
            </div>
        </>
    )
}
export default ListUser