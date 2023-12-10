import Image from "next/image"

export function UserData(data) {
    return(
        <div className="flex flex-col">
            <p className="flex justify-center items-center text-3xl">{data.data.login}</p>
            
            <a className="text-center mt-3 underline text-sky-400" href={data.data.html_url}>@{data.data.login}</a>

            <div className="flex flex-col md:flex-row justify-between mt-4">
                <figure className="flex justify-center items-center mr-4"> 
                    <Image src={data.data.avatar_url} alt="user image" width={150} height={100} style={{borderRadius: '50%'}}/>
                </figure>


                <div className="flex justify-center mt-4 items-center bg-tertiary p-6 rounded-lg w-full lg:w-2/3 ">
                    <p className="flex flex-col w-80">
                        <span>Name: {data.data.name}</span>
                        <span >Biografia: {data.data.bio}</span>
                        <span>Followers: {data.data.followers}</span>
                        <span>Repos: {data.data.public_repos}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}