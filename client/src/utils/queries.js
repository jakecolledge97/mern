import { gql } from '@apollo/client';

export const GET_ME = gql`
    query users($email: String){
    me(email: $email){
        username
        email
    }
}
`