import { useEffect } from "react"
import { useState } from "react"

export type Dimmensions = {
    width: number
    height: number
}

export function useDimmensions(containerRef: React.RefObject<HTMLDivElement>) {
    const [dimmensions, setDimmensions] = useState<Dimmensions>({
        width: 0,
        height: 0
    })
    
    useEffect(() => {
        const currentRef = containerRef.current
        function getDimmensions() {
            return {
                width: currentRef?.offsetWidth ?? 0, 
                height: currentRef?.offsetHeight ?? 0
            }
        }

        const resizeObserver = new ResizeObserver(entries => {
            const entry = entries[0]
            if (entry) {
                setDimmensions(getDimmensions())
            }
        })

        if (currentRef) {
            resizeObserver.observe(currentRef)
            setDimmensions(getDimmensions())
        }

        return () => {
            if (currentRef) {
                resizeObserver.unobserve(currentRef)
            }
            resizeObserver.disconnect()
        }
    }, [containerRef])


    return dimmensions
}