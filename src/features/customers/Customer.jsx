import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  return <div>Welcome {customer}</div>;
}

export default Customer;
