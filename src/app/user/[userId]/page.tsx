import { FC } from "react";

interface pageProps {
 params: {
  userId: string;
 }
}

export async function generateStaticParams() {
 // make call to DB to get all users ids and return as an array.
 
 // const userIds_ = await fetch('/someurl', {
 //  next: {revalidate: 60}
 // })

 // for this example im just using a array of 1 2 3 4.
 const userIds = ['1','2','3','4']

 return userIds.map((userId) => {
  return {
   // this needs to match whatever is in the brackets for the folder name.
   userId,
  }
 })
}

const page: FC<pageProps> = ({params}) => {
 return <div>{params.userId}</div>
} 

export default page;