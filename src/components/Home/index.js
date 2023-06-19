import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, Alert, Form, Button } from 'react-bootstrap';
import './index.css';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [sellers, setSellers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [filterCat, setFilterCat] = useState(["All"]);
    const [filterBrand, setFilterBrand] = useState(["All"]);
    const [filterSeller, setFilterSeller] = useState(["All"]);
    const [filterWarranty, setFilterWarranty] = useState(["All"]);
    const [searchParam] = useState(["name", "code"]);


    useEffect(() => {
        fetch(
            "http://127.0.0.1:8000/api/products"
        )
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProducts(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    useEffect(() => {
        fetch(
            "http://127.0.0.1:8000/api/categories"
        )
            .then((response) => response.json())
            .then(
                (result) => {
                    setCategories(result);
                },
                (error) => {
                    setError(error);
                }
            );
    }, []);

    useEffect(() => {
        fetch(
            "http://127.0.0.1:8000/api/brands"
        )
            .then((response) => response.json())
            .then(
                (result) => {
                    setBrands(result);
                },
                (error) => {
                    setError(error);
                }
            );
    }, []);

    useEffect(() => {
        fetch(
            "http://127.0.0.1:8000/api/sellers"
        )
            .then((response) => response.json())
            .then(
                (result) => {
                    setSellers(result);
                },
                (error) => {
                    setError(error);
                }
            );
    }, []);

    const data = Object.values(products);

    function search(products) {
        return products.filter((product) => {
            if(filterWarranty != "All"){
                if(filterSeller != "All"){
                    if(filterBrand != "All"){
                        if (product.category_id == filterCat
                             && product.brand_id == filterBrand
                              && product.seller_id == filterSeller
                               && product.warranty == filterWarranty) {
                            return searchParam.some((newItem) => {
                                return (
                                    product[newItem]
                                        .toString()
                                        .toLowerCase()
                                        .indexOf(keyword.toLowerCase()) > -1
                                );
                            });
                        } else if (filterCat == "All" 
                                && product.brand_id == filterBrand
                                 && product.seller_id == filterSeller
                                  && product.warranty == filterWarranty) {
                                return searchParam.some((newItem) => {
                                    return (
                                        product[newItem]
                                            .toString()
                                            .toLowerCase()
                                            .indexOf(keyword.toLowerCase()) > -1
                                    );
                                });
                        }
                    }
                    else{
                        if (product.category_id == filterCat
                             && product.seller_id == filterSeller
                              && product.warranty == filterWarranty) {
                            return searchParam.some((newItem) => {
                                return (
                                    product[newItem]
                                        .toString()
                                        .toLowerCase()
                                        .indexOf(keyword.toLowerCase()) > -1
                                );
                            });
                        } else if (filterCat == "All"
                          && product.seller_id == filterSeller
                            && product.warranty == filterWarranty) {
                                return searchParam.some((newItem) => {
                                    return (
                                        product[newItem]
                                            .toString()
                                            .toLowerCase()
                                            .indexOf(keyword.toLowerCase()) > -1
                                    );
                                });
                        }
                    } 
                }
                else{
                    if(filterBrand != "All"){
                        if (product.category_id == filterCat
                             && product.brand_id == filterBrand 
                             && product.warranty == filterWarranty) {
                            return searchParam.some((newItem) => {
                                return (
                                    product[newItem]
                                        .toString()
                                        .toLowerCase()
                                        .indexOf(keyword.toLowerCase()) > -1
                                );
                            });
                        } else if (filterCat == "All" 
                        && product.brand_id == filterBrand 
                        && product.warranty == filterWarranty) {
                                return searchParam.some((newItem) => {
                                    return (
                                        product[newItem]
                                            .toString()
                                            .toLowerCase()
                                            .indexOf(keyword.toLowerCase()) > -1
                                    );
                                });
                        }
                    }
                    else{
                        if (product.category_id == filterCat
                             && product.warranty == filterWarranty) {
                            return searchParam.some((newItem) => {
                                return (
                                    product[newItem]
                                        .toString()
                                        .toLowerCase()
                                        .indexOf(keyword.toLowerCase()) > -1
                                );
                            });
                        } else if (filterCat == "All" 
                            && product.warranty == filterWarranty) {
                                return searchParam.some((newItem) => {
                                    return (
                                        product[newItem]
                                            .toString()
                                            .toLowerCase()
                                            .indexOf(keyword.toLowerCase()) > -1
                                    );
                                });
                        }
                    } 
                }
            }
            else{
                if(filterSeller != "All"){
                    if(filterBrand != "All"){
                        if (product.category_id == filterCat
                             && product.brand_id == filterBrand
                              && product.seller_id == filterSeller) {
                            return searchParam.some((newItem) => {
                                return (
                                    product[newItem]
                                        .toString()
                                        .toLowerCase()
                                        .indexOf(keyword.toLowerCase()) > -1
                                );
                            });
                        } else if (filterCat == "All"
                         && product.brand_id == filterBrand 
                         && product.seller_id == filterSeller) {
                                return searchParam.some((newItem) => {
                                    return (
                                        product[newItem]
                                            .toString()
                                            .toLowerCase()
                                            .indexOf(keyword.toLowerCase()) > -1
                                    );
                                });
                        }
                    }
                    else{
                        if (product.category_id == filterCat
                             && product.seller_id == filterSeller) {
                            return searchParam.some((newItem) => {
                                return (
                                    product[newItem]
                                        .toString()
                                        .toLowerCase()
                                        .indexOf(keyword.toLowerCase()) > -1
                                );
                            });
                        } else if (filterCat == "All" 
                        && product.seller_id == filterSeller) {
                                return searchParam.some((newItem) => {
                                    return (
                                        product[newItem]
                                            .toString()
                                            .toLowerCase()
                                            .indexOf(keyword.toLowerCase()) > -1
                                    );
                                });
                        }
                    } 
                }
                else{
                    if(filterBrand != "All"){
                        if (product.category_id == filterCat 
                            && product.brand_id == filterBrand) {
                            return searchParam.some((newItem) => {
                                return (
                                    product[newItem]
                                        .toString()
                                        .toLowerCase()
                                        .indexOf(keyword.toLowerCase()) > -1
                                );
                            });
                        } else if (filterCat == "All" 
                        && product.brand_id == filterBrand) {
                                return searchParam.some((newItem) => {
                                    return (
                                        product[newItem]
                                            .toString()
                                            .toLowerCase()
                                            .indexOf(keyword.toLowerCase()) > -1
                                    );
                                });
                        }
                    }
                    else{
                        if (product.category_id == filterCat) {
                            return searchParam.some((newItem) => {
                                return (
                                    product[newItem]
                                        .toString()
                                        .toLowerCase()
                                        .indexOf(keyword.toLowerCase()) > -1
                                );
                            });
                        } else if (filterCat == "All") {
                                return searchParam.some((newItem) => {
                                    return (
                                        product[newItem]
                                            .toString()
                                            .toLowerCase()
                                            .indexOf(keyword.toLowerCase()) > -1
                                    );
                                });
                        }
                    } 
                }
            }
        });
    }

  return (
    <Container>
          <Row>
            <img src='https://www.estebanrodrigo.com/wp-content/uploads/2014/07/e-commerce-banner.jpg' style={{marginBottom: '30px'}} />
          </Row>
          <Row>
              <Col xs={12} md={3}>
              <Form>
              <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput">
              <Form.Label>Categories</Form.Label>
                            <select
                                onChange={(e) => {
                                    setFilterCat(e.target.value);
                                }}
                                className="form-control"
                                aria-label="Filter Products By categories"
                            >
                                <option value="All">All Categories</option>
                                {categories.map((cat, index)=>(
                                    <option key={index} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                </Form.Group>
                {/* <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <div className='price-container'>
                        <Form.Control type="number"/>
                        <span>To</span>
                        <Form.Control type="number" />
                        <Button variant="danger">Go</Button>
                    </div> 
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Brands</Form.Label>
                    <select
                        onChange={(e) => {
                            setFilterBrand(e.target.value);
                        }}
                        className="form-control"
                        aria-label="Filter Products By Brands"
                    >
                        <option value="All">All Brands</option>
                        {brands.map((brand, index)=>(
                            <option key={index} value={brand.id}>{brand.name}</option>
                        ))}
                    </select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Sellers</Form.Label>
                    <select
                        onChange={(e) => {
                            setFilterSeller(e.target.value);
                        }}
                        className="form-control"
                        aria-label="Filter Products By Sellers"
                    >
                        <option value="All">All Sellers</option>
                        {sellers.map((seller, index)=>(
                            <option key={index} value={seller.id}>{seller.name}</option>
                        ))}
                    </select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Warranty Period</Form.Label>
                    <select
                        onChange={(e) => {
                            setFilterWarranty(e.target.value);
                        }}
                        className="form-control"
                        aria-label="Filter Products By Warranties"
                    >
                        <option value="All">Select</option>
                        <option value="None">None</option>
                        <option value="6 months">6 Months</option>
                        <option value="1 year">1 Year</option>
                        <option value="2 years">2 Years</option>
                    </select>
                </Form.Group>
                </Form>
                </Col>

                <Col xs={12} md={9}>
                    {
                        !isLoaded
                        ?
                        <span>loading</span>
                        :
                        ""
                    }
                    {error
                    ?
                    <Alert key="danger" variant="danger">
                        {error.message}
                    </Alert>
                    :
                    <Row>
                        <Form>
                            <input style={{marginBottom: '30px', marginTop: '20px'}} 
                                    type="search"
                                    name="search"
                                    id="search"
                                    className="form-control"
                                    placeholder="Search product title or code"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                            />
                        </Form>
                            {search(data).map((product, index) => (
                                <Col xs={6} md={3} key={index}>
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="card-box">
                                            <div className="image-box">
                                                {product.image
                                                ?
                                                <img src={product.image} alt="Thumbnail"></img>
                                                :
                                                <img src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg" alt="" />
                                                }
                                            </div>
                                            <div className="text-container">                                    
                                                <h6>{product.name}</h6>
                                                <p>{product.price}BDT</p>
                                                <div className="buttons">                                    
                                                    <Button variant="danger">Buy Now</Button>
                                                    <Button variant="dark">Add to Cart</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            ))}
                        </Row> 
                    }    
                </Col>
            </Row>
      </Container>
  )
}

export default Home