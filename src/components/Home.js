import './Home.css'

const Home = () => {
    const data = [
      { name: "Jaivik Patel", email: "c0930010@mylambton.ca" },
      { name: "Shiv Mistry", email: "c0929999@mylambton.ca" },
      { name: "Piyush Vaghasiya", email: "c0912741@mylambton.ca" },
      { name: "Varshil Sahajgya", email: "c0910563@mylambton.ca" },
      { name: "Miti Kotak", email: "c0913758@mylambton.ca" },
    ];
  
    return (
      <>
        <div>
          <h1>Group 8 - Contact Details</h1>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user,index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {user.name}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {user.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  export default Home;
  