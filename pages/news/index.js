//main URL.com/news
import React from 'react'
import { useRouter } from 'next/router';
const News = () => {

    const router = useRouter()

    return (
        <div
            style={{
                height: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h4>Today's News</h4> &nbsp;&nbsp;
            <button onClick={() => {
                router.push({
                    pathname: "/news/sports",
                    // query: {
                    //     createdNftId: nftDetails?.itemDetailsId,
                    // },
                });
            }}>Sports</button>
        </div>
    )
}

export default News