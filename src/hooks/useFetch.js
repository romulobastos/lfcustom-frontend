import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [empty, setEmpty] = useState(false)
	
	const [loading, setLoading] = useState(true)
	const [loadingClass, setLoadingClass] = useState('active')
	// const hideLoading = () => {
	// 	setLoadingClass('loaded')
	// }

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			setLoadingClass('active')

			try {
				const res = await fetch(url)
				const json = await res.json()
				
				if(json.data.length === 0) setEmpty(true)
				
				setData(json.data)
				setLoading(false)
				setTimeout(() => { setLoadingClass('loaded') }, 100)
			} catch (error) {
				setError(error)
				setLoading(false)
				setTimeout(() => { setLoadingClass('loaded') }, 100)
			}
		}
		
		fetchData()
	}, [url])
	
	return { loadingClass, loading, error, data, empty }
}

export default useFetch