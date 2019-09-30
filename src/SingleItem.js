import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getItem } from "./actions/actions";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px;
  position: absolute;
  width: 800px;
  text-align: center;
`;

const Item = styled.div`
  display: inline-block;
  height: 400px;
  width: 400px;
  padding: 5px;
  border: 5px solid green;
  background-color: #e2e2e2;
`;

const Pic = styled.img`
  max-height: 200px;
  max-width: 200px;
`;

export class ComponentA extends Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.id);
  }

  render() {
    // This is needed because the initial redux state will be null and if
    // we try to render the component with it's values we will get a crash
    if (this.props.item === null) return <div>loading...</div>;

    const { _id, mainPic, name, description } = this.props.item;
    return (
      <Wrapper>
        <Item key={_id}>
          <h3>{name}</h3>
          <Pic src={mainPic} alt="" />
          <p>{description}</p>
          <Link to="/">
            <button>back</button>
          </Link>
        </Item>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  item: state.products.item
});

export default connect(
  mapStateToProps,
  { getItem }
)(ComponentA);
