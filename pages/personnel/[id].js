import { async } from "@firebase/util";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase/config";

export async function getStaticPaths() {
  const querySnapshot = await getDocs(collection(db, "personnel"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const docRef = doc(db, "personnel", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return {
    props: {
      person: data,
    },
  };
};
export default function Profil({ person }) {
  const [datas, setDatas] = useState();

  return (
    <div className="profil">
      <h1>PROFIL</h1>
      <h2>Nom:</h2>
      <p>{person.nom}</p>
      <h2>Prenom:</h2>
      <p>{person.prenom}</p>
      <h2>Fonction:</h2>
      <p>{person.fonction}</p>
      <h2>numero:</h2>
      <p>{person.numero}</p>
      <h2>Email:</h2>
      <p>{person.email}</p>
      <div className="actions">
        <button>Supprimer</button>
      </div>
    </div>
  );
}
