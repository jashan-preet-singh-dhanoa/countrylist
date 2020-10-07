import React from 'react';
import {BsSearch} from 'react-icons/bs';
import {  FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Row, Col } from 'reactstrap';
const ListHeader = ({onSearch, limit, setLimit}) => {
    return <Row>
    <Col sm="6">
    <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText><BsSearch /></InputGroupText>
    </InputGroupAddon>
    <Input className="search-box" placeholder="Search" onChange={onSearch} />
  </InputGroup>
    </Col>
    <Col sm="3">
    <FormGroup>
    <Input type="select"  className="select-range" name="select" id="exampleSelect" value={limit} onChange={(e)=>setLimit(e.target.value)}> 
      <option>5</option>
      <option>10</option>
      <option>20</option>
      <option>30</option>
    </Input>
  </FormGroup>
    </Col>
  </Row>
}

export default ListHeader;