
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

const useTheme = () => {
    const { appData } = useSelector(state => state) as RootState

    return [appData.theme]
}

export default useTheme