'use client'
import { UseGetDataUser } from "@/hooks/UseGetDataUser"
import { UserData } from "@/components/UserData"
import { useState } from "react"

export default function Home() {
  const [targetValue, setTargetValue] = useState('')
  const [userProfile, setUserProfile] = useState('')

  const { userDataInfo } = UseGetDataUser(userProfile)

  function getValueInput(e) {
    setTargetValue(e.target.value)
  }

  function handleUserInput() {
    setUserProfile(targetValue)
    setTargetValue('')
  }

  function viewUsers() {
    if(userDataInfo) return (
        <UserData key={userDataInfo.id} data={userDataInfo}/>
      )
      else return (
        <h1 className="text-red-600 font-content text-2xl">Not Found :c</h1>
    )
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row mt-20 justify-center items-center font-content text-sm sm:text-xl">
          <input className="p-2 rounded-lg w-64 focus:outline-none" onChange={getValueInput} type="text" value={targetValue} placeholder="Ingrese el usuario de github"/>
          <button onClick={handleUserInput} className="p-2 bg-tertiary rounded-lg focus:outline-none">buscar 🔍</button>
        </div>

        <div className={`${!userProfile ? 'hidden' : ''} w-11/12 sm:w-4/5 md:w-98 mt-11 bg-tertiary rounded-xl p-8`}>
          {viewUsers()}
        </div>
      </div>
    </main>
  )
}
