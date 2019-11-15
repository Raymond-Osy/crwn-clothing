import React from "react";
import MenuItem from "../menu-item/Menu-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelectors";
import "./Directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({id, ...otherSection }) => (
      <MenuItem key={id} {...otherSection} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
