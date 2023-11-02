import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import loadingAnimation from '@asset/loading.json'

const Loading = () => {
    const container = useRef(null)

    useEffect(() => {
        if(container.current){
            lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: loadingAnimation,
            });
        }
    }, []);

    return (
        <div className='w-full'>
            <div className='h-20' ref={container}></div>
        </div>
    )
}

export default Loading