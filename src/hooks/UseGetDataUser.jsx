import { useState, useEffect } from "react";
import * as API_URL from "@/services/api"

export function UseGetDataUser(user) {
    const [userDataInfo, setUsetDataInfo] = useState([])

    useEffect(() => {
        API_URL.getDataIndoUsera(user).then(setUsetDataInfo)
    }, [user])

    return { userDataInfo }
}