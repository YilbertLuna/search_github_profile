import Image from "next/image"
import { IoLocationSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";


export function UserData(data) {
    return(
        <div className="flex flex-col">
            <h1 className="flex justify-center items-center text-3xl font-Title">{data.data.login}</h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-8 ">
                <figure className="flex justify-center items-center mt-6 mb-6"> 
                    <Image src={data.data.avatar_url} alt="user image" width={150} height={100} style={{borderRadius: '50%'}}/>
                </figure>
                <div className="flex justify-center items-center">
                    <p className="flex flex-col w-80 text-center sm:text-start space-y-4 py-2 font-content text-base">
                        <span>{data.data.name} <a className="text-center mt-3 underline" href={data.data.html_url}>@{data.data.login}</a></span>
                        <span>{data.data.bio}</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col space-y-9 justify-center items items-center mt-4 bg-secondary p-3 rounded-lg w-48 s:w-full sm:w-3/4">
                    <p className="flex flex-col s:flex-row s:space-x-10 w-80 text-center font-Title">
                        <span>Repos: {data.data.public_repos}</span>
                        <span>Followers: {data.data.followers}</span>
                        <span>Following: {data.data.following}</span>
                    </p>
                </div>
                <p className="flex flex-col justify-center sm:flex-row sm:space-x-10 text-center justifay-center mt-10 font-content text-base">
                    <span className={`${!data.data.location ? 'text-gray-500' : ''} flex flex-row items-center gap-3`}><IoLocationSharp /> {data.data.location ? data.data.location : 'Not Available'}</span>
                    <a href={data.data.blog}><span className={`${!data.data.blog ? 'text-gray-500' : ''} flex flex-row items-center gap-3`}><FaLink /> {data.data.blog ? data.data.blog : 'Not Available'}</span></a>
                </p>
            </div>
        </div>
    )
}