import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

import { rutinas } from "./rutinasData";

const subirRutinas = async () => {
  try {

    await setDoc(doc(db, "config", "rutinas"), {
      rutinas,
    });

    console.log("Rutinas subidas correctamente");

  } catch (error) {

    console.error(error);

  }
};

subirRutinas();