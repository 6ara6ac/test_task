import React from "react"
import { Tweets } from '../../components/Tweets/TweetsList'
import { Page, Button, ButtonHome } from './UsersPage.styled'
import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/fetchUsers";
import { Link } from "react-router-dom";



 const UsersPage = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    

    

    useEffect(() => {
      const getTweets = async () => {
        try {
          const data  = await fetchUsers(page);
          setUsers(prevState => [...prevState, ...data]);
        } catch (error) {
          console.log(error);
        }
      };
        getTweets();
    },[page])

 

    return <>
        <ButtonHome to={'/'}>Go home</ButtonHome>
        <Page>
        <Tweets users={users}/>
        </Page>
        <Button type="button" onClick={()=>setPage(prevState => prevState + 1)}>Load more</Button>   
        </>
}

export default UsersPage


// const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
// const [page, setPage] = useState(JSON.parse(localStorage.getItem('page')) || 1)

// const handleLoad = () => {
// setPage(prevState => prevState + 1
// localStorage.setItem('page', page)
// localStorage.setItem('users', JSON.stringify(users))
// }

