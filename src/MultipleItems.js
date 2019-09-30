import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px;
  position: absolute;
  width: 800px;
  text-align: center;
`;

const Item = styled.div`
  height: 300px;
  width: 200px;
  padding: 5px;
  border: 1px solid black;
`;

const Pic = styled.img`
  max-height: 100px;
  max-width: 100px;
`;

export class MultipleItems extends Component {
  render() {
    console.log(this.props);
    return (
      <Wrapper>
        {this.props.products.map(product => (
          <Item key={product._id}>
            <h3>{product.name}</h3>
            <Pic src={product.mainPic} alt="" />
            <p>{product.description}</p>
            <Link to={`/dog/${product._id}`}>
              <button>switch</button>
            </Link>
          </Item>
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(MultipleItems);
