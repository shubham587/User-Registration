import Card from "../UI/Card/Card";
import styles from "./ListUser.module.css";
const ListUser = ({ formData }) => {
  return (
    <>
      <div className={styles["list-user"]}>
        {formData.map((item, ind) => (
          <Card key={ind} newUserName={item.username} newAge={item.age} />
        ))}
      </div>
    </>
  );
};
export default ListUser;
