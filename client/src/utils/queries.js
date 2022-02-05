import { gql } from '@apollo/client';

export const GET_ME = gql`
    query getMe($email: String!){
        me(email: $email){
            username
            email
        }
    }
    mutation addUser($email: String!, $password: String!, $username: String!){
        addUser(email: $email, password: $password, username: $username){
            user{
                username
                email
            }
            token
        }
    }
    mutation loginUser($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }   
    }
`