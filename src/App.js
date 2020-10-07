import React from 'react';
import Pagination from "react-js-pagination";
import { Alert, ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';
import {useCountry} from './hooks/useCountry';
import ListHeader from './components/listHeader';
const App = () => {
  const {setLimit,page, setPage, setKeyword, total, countryList, limit, error} = useCountry();
  const showCountryList = () => {
    return countryList.map((country, index) => {
      return <ListGroupItem key={index}> {country.name}</ListGroupItem>
    })
  }
  const onSearch = (e) => {
    setPage(1);
    setKeyword(e.target.value);
  }
  const onChangePage=(page)=>{
    setPage(page)
  }
  return (
    <Container className="mt-5">
      <Row>
        <Col sm="9">
        <h2>Country List</h2>
        </Col>
      </Row>
      <ListHeader setLimit={setLimit} onSearch={onSearch} />
      <Row>
    <Col sm="9">
    <ListGroup className="mt-3">
    {showCountryList()}
    </ListGroup>
    </Col>
      </Row>
    <Row className="mt-3">
      <Col sm="9">
      {
        total
        ?
        <Pagination
        itemClass="page-item"
        linkClass="page-link"
        activePage={page}
        itemsCountPerPage={limit}
        totalItemsCount={total}
        pageRangeDisplayed={5}
        onChange={onChangePage}
      />
      :
      <Alert color="primary">
       {error || 'No Record Found!'} 
      </Alert>
      }

      </Col>
    </Row>
  </Container>
  );

}

export default App;
