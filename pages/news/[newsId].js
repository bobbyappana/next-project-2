///main URL.com/news/dynamic routing
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NewsId = () => {
    const router = useRouter()
    const [routerData, setRouterData] = useState('')
    const [isDataApi, isSetDataApi] = useState(false)
    console.log(router.query.newsId, routerData, isDataApi);

    useEffect(() => {
        // for API calls based on routing
        if (router) {
            debugger
            setRouterData(router.query.newsId)
            if (routerData && routerData == "1") {
                isSetDataApi(true)
            } else {
                isSetDataApi(false)
            }
            console.log("isDataApi", isDataApi)
        }

    }, [router, routerData])

    return (

        <div className='row'>
            <div className='col-lg-12' style={{ display: "flex", alignItems: 'center', justifyContent: "center" }}>
                <h4>Dynamic Routing</h4>
            </div>
            <div className='col-lg-12' style={{ display: "flex", alignItems: 'center', justifyContent: "center" }}>

                {
                    isDataApi && <h4>Data from the API</h4>
                }

            </div>
        </div>
    )
}

export default NewsId