// src/firestoreService.js
import { db } from './firebase'; // 引入 Firebase 配置
import { collection, getDocs,query,where } from "firebase/firestore";


export const StockByISBN = async (isbn) => {
  try {
    const bookRef = collection(db, "LMS/Tables/BookStock");
    const q = query(bookRef, where('ISBN', '==', isbn));
    const querySnapshot = await getDocs(q);
    
    console.log("查詢結果文檔數:", querySnapshot.docs.length);
    
    if (querySnapshot.empty) {
      console.log("未找到相應的Stock");
      return [];
    }

    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("查詢錯誤:", error);
    throw error;
  }
};
