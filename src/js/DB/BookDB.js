// src/firestoreService.js
import { db } from './firebase'; // 引入 Firebase 配置
import { collection, getDocs,query,where } from "firebase/firestore";

export const fetchBooks = async () => {
  try {
    const booksCollectionRef = collection(db, "LMS/Tables/Book"); // 替換為你的集合名稱
    const querySnapshot = await getDocs(booksCollectionRef);
    
    // 將獲取的資料存儲到一個陣列中
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents: ", error);
    throw error; // 將錯誤拋出以便在 Vue 組件中捕獲
  }
};

export const QueryISBN = async (isbn) => {
  try {
    const bookRef = collection(db, "LMS/Tables/Book");
    const q = query(bookRef, where('ISBN', '==', isbn));
    const querySnapshot = await getDocs(q);
    
    console.log("查詢結果文檔數:", querySnapshot.docs.length);
    
    if (querySnapshot.empty) {
      console.log("未找到相應的書籍");
      return [];
    }

    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("查詢錯誤:", error);
    throw error;
  }
};
