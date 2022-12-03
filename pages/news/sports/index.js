//main URL.com/news/sports
import React, { useEffect, useState } from 'react'

const Sports = (itemsData) => {

    const [allItemData, setAllItemData] = useState([])
    console.log("itemData", itemsData);

    useEffect(() => {
        if (itemsData) {
            setAllItemData(itemsData.itemsData.Data)
        }
    }, [])

    return (
        <div
            style={{
                height: "500px",
                display: "flex",
                alignItems: 'center',
                justifyContent: "center"
            }}
        >
            <div>
                <div>Sports News</div>
                {allItemData && allItemData.length > 0 && allItemData.map((x, i) => {
                    return <div key={i}>
                        <h1>{x.email}</h1>
                    </div>
                })}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    // fetch API here
    const API = "https://jsonplaceholder.typicode.com/comments?postId=1"
    const Data = await fetch(API).then(res => res.json())
    console.log("Data", Data);
    return {
        props: {
            itemsData: { Data }
        },
        revalidate: 10 // data will update for every 10 wseconds
    }
}

// when the API data updated we need to update the API data in UI also for that we can use
// getServerSideProps() for automatic data updation 
// when ever a new enrty added getServerSideProps() will update the API from the UI automatically

export async function getServerSideProps() {
    // fetch API here
    const API = "https://jsonplaceholder.typicode.com/comments?postId=1"
    const Data = await fetch(API).then(res => res.json())
    console.log("Data", Data);
    return {
        props: {
            itemsData: { Data }
        },
        revalidate: 10
    }
}
export default Sports