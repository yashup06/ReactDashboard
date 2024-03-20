const Customer = ({ post }) => {
  // const {
  //   firstName,
  //   lastName,
  //   email,
  //   phone,
  //   company: { name: companyName },
  //   address: { city: city },
  // } = post;

  return (
    <div className="table-responsive small">
      <table className="table table-striped table-sm tabledetails">
        {/* <thead>
          <tr>
            <th scope="col">Customer Name</th>
            <th scope="col">Company</th>
            <th scope="col">PhoneNumber</th>
            <th scope="col">Email</th>
            <th scope="col">Country</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            {post && <td>{post.firstName}</td>}
            {post && <td>{post.company.name}</td>}
            {post && <td>{post.phone}</td>}
            {post && <td>{post.email}</td>}
            {post && <td>{post.address.city}</td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Customer;
