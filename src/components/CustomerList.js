function hidePassword(password) {
  if (!password) return "";
  return "*".repeat(password.length);
}

export function CustomerList(params) {
  return (
    <div className="boxed">
      <h4>Customer List</h4>
      <table id="customer-list">
        <thead>
          <tr>
            <th>Names</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {params.customers.map((item, index) => {
            return (
              <tr
                key={item.id}
                className={item.id === params.formObject.id ? "selected" : ""}
                onClick={() => params.handleListClick(item)}
              >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{hidePassword(item.password)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
