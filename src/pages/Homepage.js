import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom'

export default function Homepage() {

	const baseURL = "http://localhost:1337"
	const motosUrl = "/api/motos?populate=cover,categorie"

	const { loadingClass, loading, error, data, empty } = useFetch(baseURL+motosUrl)
	
	if (loading) return <></>
	if (error) return <p>Erro ao carregar :(</p>
	if (empty) return <p>Sem motos cadastradas :(</p>

	return (
		<div className='cards d-flex flex-row flex-wrap m-0875 mt-2'>
			<div className={`loading ${loadingClass}`}><p>Carregando</p></div>
			{ data.map(({id, attributes: moto }) => (
				<Link key={id} to={`/motodetails/${id}`} className='card d-flex flex-row align-items-start align-items-center-sm justify-content-start'>
					<div className='card-image-thumb'>
						<img src={ baseURL + moto.cover.data.attributes.formats.medium.url } />
					</div>
				</Link>
			))}
		</div>
	)
}