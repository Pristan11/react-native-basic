import React,{createContext, useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
export const DataContext = createContext();
const DataProvider = ({children}) => {
    useEffect(() => {
     getData();
    },[])
    const name ='ristan'
const [users,setUsers] = useState([]);
const [cardItems,setCardItems] = useState([]);
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((log) => setUsers(log))
        .catch((error) => console.error(error))
   
    }

    const addtoCard = (item) => {
        setCardItems(preState=> {return [...preState,item]});
        console.log(item);
    }
    return (
        <DataContext.Provider
        value={{name, users, addtoCard,cardItems}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider

const styles = StyleSheet.create({})
