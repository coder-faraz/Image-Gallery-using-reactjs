
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from "./Spinner";
import ImageCard from "./ImageCard";



const Images = (props) => {

    const [imageURL, setImageURL] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);


    useEffect( () => {

        async function fetchData() {
            const url = `https://api.unsplash.com/search/photos?query=${props.cat}&client_id=2bR_5DEJxcFq4yVWdEO9ZA8067G231F3dScPXDqxxoo`;
            props.progress(10);

            const response = await fetch(url);
            props.progress(50);

            const data = await response.json();
            props.progress(70);

            setImageURL(data.results);
            setTotalResults(data.total);
            setLoading(false);
            setPage(1);

            props.progress(100);
        }

        fetchData();
    }, [])


    async function fetchMoreData() {
        const nextPage = `https://api.unsplash.com/search/photos?query=${props.cat}&client_id=2bR_5DEJxcFq4yVWdEO9ZA8067G231F3dScPXDqxxoo&page=${page + 1}`;
        setPage(page + 1);
        // console.log(nextPage)

        const response = await fetch(nextPage);
        const data = await response.json();

        setImageURL(imageURL.concat(data.results));
        setTotalResults(data.total);

    }


    return (

        <>
        { loading && <Spinner /> }   {/*  this will render when both the conditions are true  */}

            <InfiniteScroll
            dataLength={ imageURL.length }
            next={ fetchMoreData }
            hasMore={ imageURL.length !== totalResults }
            loader={ <Spinner /> }
            endMessage={ <p style={ { textAlign: 'center', } }><b> You Have Reached The End Of The Document..</b></p> }
            >
            <Container>
                <h2 id="heading" style={{ border: "2px dashed lavender" }}> Image Gallery </h2>
                <Row className='my-3'>
                { imageURL.map(elem => {
                    return <Col key={ elem.id } className='my-3'>
                        <ImageCard imgURL={ elem.urls.small } linkToFullImg={ elem.urls.regular } />
                    </Col>
                    })
                }
                </Row>
            </Container>
            </InfiniteScroll>
        </>

    );
}


export default Images;

