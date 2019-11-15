import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelectors"
import CollectionItem from "../../components/collection-item/CollectionItem";
import "./Collection.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
  <div className="collection-page">
    <h2 classname="title">{title}</h2>
    <div class="items">
      {
        items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);