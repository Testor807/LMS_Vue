// firestoreService.js
import { getFirestore, collection, getDocs } from "firebase/firestore"; 

const db = getFirestore();

export const fetchData = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(collectionName));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export const fetchSubCollectionData = async (collectionName, docId, subCollectionName) => {
  try {
    const querySnapshot = await getDocs(subCollection(db, collectionName, docId, subCollectionName));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("Error fetching sub-collection data: ", error);
    throw error;
  }
};