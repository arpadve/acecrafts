import { useState, useEffect } from "react";
import { projectFirestore } from "../Firestore/FirestoreConfig";
import {
  DocumentData,
  DocumentReference,
  QueryDocumentSnapshot,
} from "@firebase/firestore-types";
import { AlbumsCollection } from "../Components/Portfolio";
export interface Entity {
  id?: string;
}
const dataFromSnapshot = <T extends Entity>(
  snapShot: QueryDocumentSnapshot
): T => {
  //  if(!snapShot.exists){
  //    return undefined;
  //  }
  const data = snapShot.data() as any;
  return {
    ...data,
    id: snapShot.id,
  } as T;
};
interface StoreState<T> {
  isLoading: boolean;
  documents: T[];
}

const useFirestore = function useFirestore<T extends Entity>(
  collection: string
) {
  const [storeState, setSstoreState] = useState<StoreState<T>>({
    isLoading: true,
    documents: [],
  });

  useEffect(() => {
    const unsub = projectFirestore.collection(collection).onSnapshot((snap) => {
      const documents = snap.docs.map((doc) => dataFromSnapshot<T>(doc));
      setSstoreState({ isLoading: false, documents });
    });

    return () => unsub();
  }, [collection]);

  return storeState;
};

export default useFirestore;
