import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";

export async function getStaticProps() {
  const querySnapshot = await getDocs(collection(db, "personnel"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return {
    props: {
      person: data,
    },
  };
}
export default function Home({ person }) {
  const [status, setStatus] = useState(false);

  return (
    <div className="home">
      <h1>HOME</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Numero</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {person.map((item) => (
              <tr key={item.id}>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.numero}</td>
                <td>
                  <button
                    onClick={() => {
                      console.log(status);
                    }}
                    className={
                      item.status === "absent" ? "status" : "present-status"
                    }
                  >
                    {item.status}
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
