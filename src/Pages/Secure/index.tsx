import Layout from "../../Components/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const SecurePage = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <Layout>
      <div>
        {auth.user ? (
          <div>
            <span>
              First Name: {auth.user.profile?.first_name}
              Last Name: {auth.user.profile?.last_name}
            </span>
          </div>
        ) : (
          ""
        )}
        <h3>this is a secure page</h3>
      </div>
    </Layout>
  );
};

export default SecurePage;
