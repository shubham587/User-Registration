import Form from "../Form/Form";
import styles from "./AddUser.module.css";
const AddUser = ({ onGetData }) => {
  const getDataHandler = (formData) => {
    onGetData(formData);
  };
  return (
    <>
      <Form onGetData={getDataHandler} />
    </>
  );
};
export default AddUser;
