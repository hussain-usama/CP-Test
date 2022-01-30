import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage: localStorage
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export  {store,persistor}