import { collection, getDocs } from "firebase/firestore";
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
export default function Personnel({ person }) {
  return (
    <div className="personnel">
      <h1>LISTE PERSONNEL</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Numero</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {person.map((item) => (
              <tr key={item.id}>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.numero}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className={
                      item.status === "absent" ? "status" : "present-status"
                    }
                  >
                    {item.status}
                  </button>
                </td>
                <td>
                  <button>Profil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
