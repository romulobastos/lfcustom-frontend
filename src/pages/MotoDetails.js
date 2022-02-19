import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link, useParams } from 'react-router-dom'


export default function MotoDetails() {
	
	const { id } = useParams()
	const baseURL = "http://localhost:1337"
	const motosUrl = "/api/motos/" + id + "?populate=cover,categorie"
	
	const { loadingClass, loading, error, data, empty } = useFetch(baseURL+motosUrl)
	
	if (loading) return <></>
	if (error) return <p>Moto não encontrada :(</p>
	if (empty) return <p>Moto não encontrada :(</p>

	const categName = data.attributes.categorie.data ? data.attributes.categorie.data.attributes.name : 'Categoria não informada'

	return (
		<div>
			<div className={`loading ${loadingClass}`}><p>Carregando</p></div>
			<Link to="/" className='btn btn-ghost go-back'>Voltar</Link>
			<div className='d-flex flex-column'>
				<div className='card rounded d-flex flex-column align-items-start align-items-center-sm justify-content-start'>
					<div className='card-image'>
						<img className='rounded' src={ baseURL + data.attributes.cover.data.attributes.formats.large.url } />
					</div>
					<div className='card-info d-flex flex-column align-items-center-sm mt-1-sm'>
						<h3>{data.attributes.brand} {data.attributes.model}</h3>
						<span>{data.attributes.cylinder}cc / Cor: {data.attributes.color} / Ano: {data.attributes.year}</span>
						<span>{categName}</span>
					</div>
				</div>
			</div>
		</div>
	)
}