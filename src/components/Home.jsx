import { LuUsers2 } from "react-icons/lu";

const Home = () => {
  return (
    <>
      <div>
        <div className="stats">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <LuUsers2
                style={{
                  fontSize: "30px",
                  borderRadius: "50%",
                  marginTop: "100%",
                  marginRight: "15px",
                  backgroundColor: "rgba(144, 238, 144, 0.5)",
                  color: "green",
                }}
              />
            </div>
            <div>
              <p className="customer">Total Customers</p>
              <p className="number">5423</p>
              <p className="percent">16% this month</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <LuUsers2
                style={{
                  fontSize: "30px",
                  borderRadius: "50%",
                  marginTop: "100%",
                  marginRight: "15px",
                  backgroundColor: "rgba(144, 238, 144, 0.5)",
                  color: "green",
                }}
              />
            </div>
            <div>
              <p className="customer">Members</p>
              <p className="number">1893</p>
              <p className="percent">16% this month</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <LuUsers2
                style={{
                  fontSize: "30px",
                  borderRadius: "50%",
                  marginTop: "100%",
                  marginRight: "15px",
                  backgroundColor: "rgba(144, 238, 144, 0.5)",
                  color: "green",
                }}
              />
            </div>
            <div>
              <p className="customer">Active Now</p>
              <p className="number">189</p>
              <p className="percent">16% this month</p>
            </div>
          </div>
        </div>
        <div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>All Customers</p>
        </div>
      </div>
    </>
  );
};

export default Home;
