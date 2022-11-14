import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";
import React from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const [cdate, setCdate] = React.useState({
    heure: null,
    date: null,
  });

  async function changeStatus(id) {
    //Je recupere d'abords le document pour vérifier la valeur du status
    const personneRef = doc(db, "personnel", id);
    const docSnap = await getDoc(personneRef);

    //je change le status dependament de la valeur qui a ete verifiée
    if (docSnap.data().status) {
      await updateDoc(personneRef, {
        status: false,
      });
    } else {
      await updateDoc(personneRef, {
        status: true,
      });
    }
    router.push("/");
  }

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
                      // const date = new Date();
                      // setCdate({
                      //   heure: date.toDateString(),
                      //   date: date.toLocaleTimeString(),
                      // });
                      changeStatus(item.id);
                    }}
                    className={item.status ? "present-status" : "status"}
                  >
                    {item.status && "present"}
                    {!item.status && "absent"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
