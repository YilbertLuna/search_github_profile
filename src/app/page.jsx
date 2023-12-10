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
    if(!userDataInfo) return (
        <h1 className="text-red-600 text-xl">Not Found :c</h1>
      )
      else return (
      <UserData key={userDataInfo.id} data={userDataInfo}/>
    )
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row mt-28 justify-center items-center">
          <input className="p-2 rounded-lg w-64 focus:outline-none" onChange={getValueInput} type="text" value={targetValue} placeholder="Ingrese el usuario de github"/>
          <button onClick={handleUserInput} className="p-2 bg-tertiary rounded-lg focus:outline-none">buscar 🔍</button>
        </div>

        <div className={`${!userProfile ? 'hidden' : ''} w-11/12 md:w-2/3 lg:w-2/4 mt-11 bg-secondary rounded-xl p-8`}>
          {viewUsers()}
        </div>
      </div>
    </main>
  )
}
