import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { fetchAllRecipes } from '../Redux/Slices/recipieSlice'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

const Home = () => {
    const dispatch = useDispatch()
    const {allRecipes,loading,error} = useSelector(state=>state.recipieReducer)
    console.log(allRecipes,loading,error)
    const [ Currentpage,setCurrentPage]= useState(1)
    const productPerPage = 6
    const totalPage = Math.ceil(allRecipes?.length/productPerPage)
    const currentPageLastProductIndex = Currentpage * productPerPage
    const CurrentpageFirstProductIndex = currentPageLastProductIndex-productPerPage
    const visiblerecipies = allRecipes?.slice(CurrentpageFirstProductIndex,currentPageLastProductIndex)
    useEffect(()=>{
        dispatch(fetchAllRecipes())
      },[])
    const navigateToNextPage = ()=>{
        if(Currentpage!=totalPage){
          setCurrentPage(Currentpage+1)
        }
      }
    
      const navigateToPrevPage = ()=>{
        if(Currentpage!=totalPage){
          setCurrentPage(Currentpage-1)
        }
      }
    return (
      <div>
        <Header insideHome={true} />
        <h1 className="text-center mt-4" style={{fontFamily:"Afacad Flux"}}>ALL RECIPES</h1>
        <div style={{ paddingTop: '100px' }} className='container p-4 mx-auto'>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center my-5 text-lg">
              <img height={'70px'} width={"70px"} src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-7.jpg" alt="Loading" />
              loading...
            </div>
          ) : (
            <>
              {error && <div className="text-danger">{error}</div>}
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 m-5 shadow border-primary pt-3 pb-5">
              {allRecipes.length > 0 ? (
               visiblerecipies.map(recipes => (
            <div key={recipes.id} className=" rounded p-2 shadow-effect" style={{ maxWidth: '300px', width: '100%' }}>
           <Card className="hover-shadow" style={{maxHeight:"400px"}}>
           <Card.Img 
            variant="top" 
            src={recipes.image} 
            height={'250px'}
            alt={`${recipes.name} image`} 
            style={{ height: '300px', objectFit: 'cover' }} 
          />
          <Card.Body className='text-center'>
            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{recipes.name}</Card.Title>
            <Card.Text className='mt-3'>
              <Link className='bg-primary rounded p-2 text-white ' style={{ textDecoration: "none" }} to={`/${recipes.id}/view`}>
                View more
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
                  ))
                ) : (
                  <div className="d-flex justify-content-center align-items-center">
                    Recipes not found
                  </div>
                )}
              </div>
              <div className="text-center my-5 text-2xl font-bold mt-20">
                <span onClick={navigateToPrevPage} className={`cursor-pointer ${Currentpage === 1 ? 'text-black' : ''}`}>
                  <i className="fa-solid fa-backward me-5"></i>
                </span>
                <span>{Currentpage} of {totalPage}</span>
                <span onClick={navigateToNextPage} className={`cursor-pointer ${Currentpage === totalPage ? 'text-black' : ''}`}>
                  <i className="fa-solid fa-forward ms-5"></i>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
export default Home