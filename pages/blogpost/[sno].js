import { useRouter } from 'next/router';


const Post = () => {
   const { sno }  = useRouter().query;
   
   return <p>Post: {sno}</p>
}

export default Post